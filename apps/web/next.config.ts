import type { NextConfig } from 'next';

const config: NextConfig = {
    typedRoutes: true,
    reactCompiler: true,
    output: 'standalone',
    transpilePackages: ['@checkmate/ui'],
};

export default config;
