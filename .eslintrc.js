module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    ],
    plugins: ['react'],
    rules: {
        'no-mixed-spaces-and-tabs': 0, // disable rule,
        'no-undef': 'warn',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'react/prop-types': [
            'off'
        ],
        'react-hooks/rules-of-hooks': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-tabs': 0,
        indent: [
            'error',
            4
        ]
    }
}
