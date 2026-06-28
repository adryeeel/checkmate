import type { NextConfig } from 'next';

const config: NextConfig = {
    typedRoutes: true,
    reactCompiler: true,
    transpilePackages: ['@checkmate/ui'],
};

export default config;
