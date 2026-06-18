import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-empty': [2, 'never'],
        'scope-enum': [
            2,
            'always',
            ['web', 'api', 'deps', 'arch', 'infra', 'tools', 'actions', 'product', 'templates'],
        ],
    },
};

export default config;
