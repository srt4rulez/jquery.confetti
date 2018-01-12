(function() {
    // globals
    var canvas;
    var ctx;
    var W;
    var H;
    var mp                = 150; // max particles
    var particles         = [];
    var angle             = 0;
    var tiltAngle         = 0;
    var confettiActive    = false;
    var animationComplete = true;
    var deactivationTimerHandler;
    var reactivationTimerHandler;
    var animationHandler;

    var particleColors = {
        colorOptions:     ['DodgerBlue', 'OliveDrab', 'Gold', 'pink', 'SlateBlue', 'lightblue', 'Violet', 'PaleGreen', 'SteelBlue', 'SandyBrown', 'Chocolate', 'Crimson',],
        colorIndex:       0,
        colorIncrementer: 0,
        colorThreshold:   10,
        getColor:         function() {
            if (this.colorIncrementer >= 10) {
                this.colorIncrementer = 0;
                this.colorIndex++;
                if (this.colorIndex >= this.colorOptions.length) {
                    this.colorIndex = 0;
                }
            }
            this.colorIncrementer++;

            return this.colorOptions[this.colorIndex];
        }
    };

    $(document).ready(function() {

        SetGlobals();
        InitializeButton();

        $(window).resize(function() {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W;
            canvas.height = H;
        });

    });

    function SetGlobals() {

        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;

    }

    function InitializeButton() {
        $('#stopButton').click(DeactivateConfetti);
        $('#startButton').click(RestartConfetti);
    }

    function InitializeConfetti() {

        var particleColor, index;

        particles = [];

        animationComplete = false;

        for (index = 0; index < mp; index++) {

            particleColor = particleColors.getColor();

            particles.push(new confettiParticle(particleColor));

        }

        StartConfetti();

    }

    function confettiParticle(color) {

        this.x = Math.random() * W; // x-coordinate
        this.y = (Math.random() * H) - H; // y-coordinate
        this.r = Math.floor(Math.random() * (10 - 30 + 1) + 30); // radius;
        this.d = (Math.random() * mp) + 10; // density;
        this.color = color;
        this.tilt = Math.floor(Math.random() * 10) - 10;
        this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
        this.tiltAngle = 0;

        this.draw = function() {
            ctx.beginPath();
            ctx.lineWidth = this.r / 2;
            ctx.strokeStyle = this.color;
            ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
            ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));

            return ctx.stroke();
        };

    }

    function StartConfetti() {

        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;

        (function animloop() {

            if (animationComplete) {
                return null;
            }

            animationHandler = window.requestAnimationFrame(animloop);

            Draw();

        }());

    }

    function Draw() {

        var index;

        ctx.clearRect(0, 0, W, H);

        for (index = 0; index < mp; index++) {
            particles[index].draw();
        }

        Update();

    }

    function Update() {

        var remainingFlakes = 0;
        var particle
        var index;

        angle += 0.01;
        tiltAngle += 0.1;

        for (index = 0; index < mp; index++) {

            particle = particles[index];
            if (animationComplete) {
                return;
            }

            if (!confettiActive && particle.y < -15) {
                particle.y = H + 100;
                continue;
            }

            stepParticle(particle, index);

            if (particle.y <= H) {
                remainingFlakes++;
            }

            if (confettiActive) {
                CheckForReposition(particle, index);
            }

        }

        if (remainingFlakes === 0) {
            StopConfetti();
        }

    }

    function stepParticle(particle, particleIndex) {

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;
        particle.x += Math.sin(angle);
        particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15;

    }

    function CheckForReposition(particle, index) {

        if ((particle.x > W + 20 || particle.x < -20 || particle.y > H)) {

            if (index % 5 > 0 || index % 2 == 0) { // 66.67% of the flakes

                repositionParticle(
                    particle,
                    Math.random() * W,
                    -10,
                    Math.floor(Math.random() * 10) - 10
                );

            } else if (Math.sin(angle) > 0) {

                // Enter from the left
                repositionParticle(
                    particle,
                    -5,
                    Math.random() * H,
                    Math.floor(Math.random() * 10) - 10
                );

            } else {

                // Enter from the right
                repositionParticle(
                    particle,
                    W + 5,
                    Math.random() * H,
                    Math.floor(Math.random() * 10) - 10
                );

            }

        }

    }

    function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {

        particle.x = xCoordinate;
        particle.y = yCoordinate;
        particle.tilt = tilt;

    }

    function ClearTimers() {
        clearTimeout(reactivationTimerHandler);
        clearTimeout(animationHandler);
    }

    function DeactivateConfetti() {
        confettiActive = false;
        ClearTimers();
    }

    function StopConfetti() {
        animationComplete = true;
        if (ctx == undefined) {
            return;
        }
        ctx.clearRect(0, 0, W, H);
    }

    function RestartConfetti() {

        ClearTimers();
        StopConfetti();

        reactivationTimerHandler = setTimeout(function() {
            confettiActive = true;
            animationComplete = false;
            InitializeConfetti();
        }, 100);

    }

}());
