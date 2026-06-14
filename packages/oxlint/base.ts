import type { OxlintConfig } from 'oxlint';

export const baseConfig: OxlintConfig = {
    plugins: ['typescript', 'eslint', 'unicorn', 'oxc'],
    options: {
        typeAware: true,
        typeCheck: true,
    },
};
