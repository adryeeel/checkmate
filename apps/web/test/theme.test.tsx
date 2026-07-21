import { render } from 'vitest-browser-react';
import { test, expect, describe, afterEach } from 'vitest';

import { mockMatchMedia } from '@test/mock/match-media';
import { ThemeProvider, ThemeToggle } from '@checkmate/ui/internal/theme';

afterEach(() => {
    localStorage.clear();
});

describe('ThemeToggle', () => {
    test('change theme to dark', async () => {
        const { getByRole, getByText } = await render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>,
        );

        await getByRole('button').click();
        await getByText(/dark/i).click();

        await expect.element(document.documentElement).toHaveAttribute('data-theme', 'dark');
    });

    test('change theme to light', async () => {
        const { getByRole, getByText } = await render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>,
        );

        await getByRole('button').click();
        await getByText(/light/i).click();

        await expect.element(document.documentElement).toHaveAttribute('data-theme', 'light');
    });

    test('theme is light by default', async () => {
        mockMatchMedia('light');

        await render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>,
        );

        await expect.element(document.documentElement).toHaveAttribute('data-theme', 'light');
    });

    test('theme is dark by default', async () => {
        mockMatchMedia('dark');

        await render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>,
        );

        await expect.element(document.documentElement).toHaveAttribute('data-theme', 'dark');
    });
});
