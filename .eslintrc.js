module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'script'
    },
    extends: 'eslint:recommended',
    env: {
        browser: true
    },
    rules: {
        // Possible Errors
        // http://eslint.org/docs/rules/#possible-errors
        'no-template-curly-in-string': 'warn',
        'valid-jsdoc':                 'warn',

        // Best Practices
        // http://eslint.org/docs/rules/#best-practices
        'array-callback-return': 'error',
        'block-scoped-var':      'error',
        'complexity':            'error',
        'curly':                 ['error', 'all'],
        'default-case':          'error',
        'dot-notation':          'warn',
        'eqeqeq':                ['warn', 'smart'],
        'no-case-declarations':  'error',
        'no-else-return':        'error',
        'no-empty-function':     'error',
        'no-empty-pattern':      'error',
        'no-eq-null':            'error',
        'no-eval':               'error',
        'no-extra-bind':         'error',
        'no-extra-label':        'error',
        'no-global-assign':      'error',
        'no-implicit-coercion':  'error',
        'no-implicit-globals':   'error',
        'no-implied-eval':       'error',
        'no-invalid-this':       'error',
        'no-iterator':           'error',
        'no-labels':             'error',
        'no-lone-blocks':        'error',
        'no-loop-func':          'error',
        'no-multi-spaces':       ['error', {
            exceptions: {
                Property:           true,
                VariableDeclarator: true,
                ImportDeclaration:  true,
            }
        }],
        'no-multi-str':                 'error',
        'no-new':                       'error',
        'no-new-func':                  'error',
        'no-new-wrappers':              'error',
        'no-octal-escape':              'error',
        'no-param-reassign':            'error',
        'no-proto':                     'error',
        'no-return-assign':             'error',
        'no-return-await':              'error',
        'no-script-url':                'error',
        'no-self-compare':              'error',
        'no-sequences':                 'error',
        'no-throw-literal':             'error',
        'no-unmodified-loop-condition': 'error',
        'no-useless-call':              'error',
        'no-useless-concat':            'error',
        'no-useless-escape':            'error',
        'no-useless-return':            'error',
        'no-void':                      'error',
        'no-warning-comments':          'warn',
        'no-with':                      'error',
        'radix':                        'error',
        'vars-on-top':                  'warn',
        'wrap-iife':                    'error',
        'yoda':                         ['error', 'never', { 'exceptRange': true }],

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        'array-bracket-spacing':     ['error', 'never'],
        'block-spacing':             ['error', 'always'],
        'brace-style':               ['error', '1tbs'],
        'camelcase':                 ['error', { properties: 'always' }],
        'comma-dangle':              ['error',  {
            arrays:    'always',
            objects:   'only-multiline',
            imports:   'never',
            exports:   'never',
            functions: 'ignore',
        }],
        'comma-spacing':             ['error', { before: false, after: true }],
        'comma-style':               ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'eol-last':                  ['error', 'always'],
        'func-call-spacing':         ['error', 'never'],
        'id-length':                 'error',
        'indent':                    'error',
        'key-spacing':               ['error', {
            beforeColon: false,
            afterColon:  true,
            mode:        'minimum',
            align:       'value',
        }],
        'keyword-spacing': ['error', {
            before: true,
            after:  true,
        }],
        'linebreak-style': 'error',
        'max-depth':       ['error',  { max: 4 }],
        'max-len':         ['warn', {
            code:                   80,
            tabWidth:               4,
            ignoreUrls:             true,
            ignoreStrings:          true,
            ignoreTrailingComments: true
        }],
        'max-nested-callbacks':          'error',
        'max-params':                    'warn',
        'max-statements-per-line':       'error',
        'newline-after-var':             ['error', 'always'],
        'newline-before-return':         'error',
        'newline-per-chained-call':      'error',
        'no-array-constructor':          'error',
        'no-lonely-if':                  'error',
        'no-mixed-operators':            'error',
        'no-multi-assign':               'error',
        'no-multiple-empty-lines':       ['error', { max: 1, maxEOF: 1 }],
        'no-nested-ternary':             'error',
        'no-new-object':                 'error',
        'no-tabs':                       'error',
        'no-trailing-spaces':            'error',
        'no-underscore-dangle':          'error',
        'no-unneeded-ternary':           'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing':          ['error', 'always'],
        'object-property-newline':       ['error', { allowMultiplePropertiesPerLine: true }],
        'operator-assignment':           ['error', 'always'],
        'operator-linebreak':            ['error', 'after'],
        'quote-props':                   ['error', 'as-needed'],
        'quotes':                        ['error', 'single'],
        'semi':                          ['error', 'always'],
        'semi-spacing':                  ['error', { before: false, after: true }],
        'space-before-blocks':           ['error', 'always'],
        'space-before-function-paren':   ['error', 'never'],
        'space-in-parens':               ['error', 'never'],
        'space-infix-ops':               ['error', { int32Hint: false }],
        'space-unary-ops':               ['error', { words: true, nonwords: false }],
        'spaced-comment':                ['error', 'always'],
    }
};
