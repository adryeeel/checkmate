import type { Configuration } from 'lint-staged';

const config: Configuration = {
    '*.{md,yml,json}': ['pnpm oxfmt'],
    '*.{ts,tsx}': ['pnpm oxlint', 'pnpm oxfmt'],
};

export default config;
