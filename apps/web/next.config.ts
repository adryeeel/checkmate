import type { NextConfig } from 'next';

const config: NextConfig = {
    typedRoutes: true,
    reactCompiler: true,
    output: 'standalone',
    transpilePackages: ['@checkmate/ui'],
    experimental: { useTypeScriptCli: true },
};

export default config;
