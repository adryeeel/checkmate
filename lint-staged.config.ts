import type { Configuration } from 'lint-staged';

const config: Configuration = {
    '*.json': ['pnpm oxfmt'],
    '*.{ts,tsx}': ['pnpm oxlint', 'pnpm oxfmt'],
};

export default config;
