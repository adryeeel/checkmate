import { vi } from 'vitest';

type Theme = 'light' | 'dark';

interface MatchMedia {
    matches: boolean;
    media: string;
    onchange: null;
    addListener: () => void;
    removeListener: () => void;
    addEventListener: () => void;
    removeEventListener: () => void;
    dispatchEvent: () => void;
}

type MatchMediaMock = (query: string) => MatchMedia;

export function mockMatchMedia(theme: Theme) {
    const mock = vi.fn<MatchMediaMock>((query) => ({
        matches: query === '(prefers-color-scheme: dark)' && theme === 'dark',
        media: query,
        onchange: null,
        addListener: () => 0,
        removeListener: () => 0,
        addEventListener: () => 0,
        removeEventListener: () => 0,
        dispatchEvent: () => 0,
    }));

    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: mock,
    });
}
