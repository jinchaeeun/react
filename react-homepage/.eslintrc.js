module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended', // eslint
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
        'prettier', // eslint-config-prettier
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react', // eslint-plugin-react
        '@typescript-eslint', // @typescript-eslint/eslint-plugin
        'prettier',
    ],
    rules: {
        indent: ['error', 4],
        'no-unused-vars': 1,
        'no-use-before-define': 1,
        'no-redeclare': 1,
        'no-console': 0,
    },
};
