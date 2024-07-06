'use client';

import Image from "next/image";
import mobileBg from '@/assets/home/mobile/image-hero-coffeepress.jpg';
import tabletBg from '@/assets/home/tablet/image-hero-coffeepress.jpg';
import desktopBg from '@/assets/home/desktop/image-hero-coffeepress.jpg';
import useDeviceSize from "@/hooks/useDeviceSize";

export default function IntroBackgroundImg() {
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
                    alt="coffee press"
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
            }
        </>
    )
}