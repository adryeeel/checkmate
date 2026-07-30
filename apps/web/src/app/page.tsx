import { Metadata } from 'next';

import { Header } from '@/components/header';

export const metadata: Metadata = {
    title: 'Checkmate | Automate Your Business',
    description: 'AI Solutions to Boost Your Business.',
};

export default function Page() {
    return (
        <main>
            <Header />
        </main>
    );
}
