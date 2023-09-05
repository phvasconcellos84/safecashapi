export default [
    {
        files: ['scr/**/*.ts'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            project: 'tsconfig.json',
            tsconfigRootDir: __dirname,
            sourceType: 'module'
        },
        extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
        root: true,
        env: {
            node: true,
            jest: true
        },
        plugins: ['@typescript-eslint/eslint-plugin'],
        ignorePatterns: ['.eslintrc.js'],
        rules: {
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-inferrable-types': 'error'
        }
    }
];
