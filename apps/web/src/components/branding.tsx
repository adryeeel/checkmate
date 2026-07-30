import Image from 'next/image';

import { Separator } from '@checkmate/ui/shadcn/separator';

export function Branding() {
    const LOGO_SIZE = 36;

    return (
        <>
            <Image
                src='/img/arocha.png'
                alt='Logo'
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                className='h-6 w-auto invert dark:invert-0'
                priority
            />
            <Separator orientation='vertical' className='mx-4 my-1 w-0.5! rotate-25' />
            <Image
                src='/img/logo-light.png'
                alt='Logo'
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                priority
                className='-ml-1 hidden dark:block'
            />
            <Image
                src='/img/logo-dark.png'
                alt='Logo'
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                priority
                className='-ml-1 dark:hidden'
            />
        </>
    );
}
