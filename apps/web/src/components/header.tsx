import { ThemeToggle } from '@checkmate/ui/internal/theme';

import { Branding } from '@/components/branding';

export function Header() {
    return (
        <header className='px-4 py-2'>
            <div className='mx-auto flex max-w-6xl items-center'>
                <Branding />
                <div className='ml-auto'>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
