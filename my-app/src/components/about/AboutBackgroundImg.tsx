'use client';

import mobileBg from '@/assets/about/mobile/image-hero-whitecup.jpg';
import tabletBg from '@/assets/about/tablet/image-hero-whitecup.jpg';
import desktopBg from '@/assets/about/desktop/image-hero-whitecup.jpg';
import Image from 'next/image';
import useDeviceSize from '@/hooks/useDeviceSize';

export default function AboutBackgroundImg() {
    const [width, height] = useDeviceSize();

    return (
        <>
            { width !== 0 &&
                <Image 
                     src={ width >= 1040 
                        ? desktopBg
                        : width >= 720
                            ? tabletBg
                            : mobileBg
                    }
                    alt="white cup"
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
            }
        </>
    )
}