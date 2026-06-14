import type { OxfmtConfig } from 'oxfmt';
import { baseConfig } from './base.ts';

export const nextConfig: OxfmtConfig = {
    ...baseConfig,
    jsxSingleQuote: true,
};
