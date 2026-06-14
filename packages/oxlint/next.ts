import type { OxlintConfig } from 'oxlint';
import { baseConfig } from './base.ts';

export const nextConfig: OxlintConfig = {
    extends: [baseConfig],
    plugins: ['nextjs', 'react', 'jsx-a11y', 'vitest'],
};
