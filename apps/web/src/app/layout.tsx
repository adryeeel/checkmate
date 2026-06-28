import '@checkmate/ui/global.css';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@checkmate/ui/internal/theme';

interface Props {
    children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en' className={inter.variable} suppressHydrationWarning>
            <body>
                <ThemeProvider
                    enableSystem
                    attribute='class'
                    defaultTheme='system'
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
