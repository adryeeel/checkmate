'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from '@checkmate/ui/shadcn/dropdown';

import { Button } from '@checkmate/ui/shadcn/button';

type Props = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: Props) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button variant='outline' size='icon'>
                        <Sun className='size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                        <Moon className='absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                        <span className='sr-only'>Toggle theme</span>
                    </Button>
                }
            />
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
