import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
    resolve: {
        alias: {
            '@test': new URL('./test', import.meta.url).pathname,
        },
    },
    test: {
        browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }],
            provider: playwright({
                launchOptions: { channel: 'chromium' },
            }),
        },
    },
});
