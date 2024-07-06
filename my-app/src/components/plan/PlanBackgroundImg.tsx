'use client';

import Image from "next/image";
import mobileBg from '@/assets/plan/mobile/image-hero-blackcup.jpg';
import tabletBg from '@/assets/plan/tablet/image-hero-blackcup.jpg';
import desktopBg from '@/assets/plan/desktop/image-hero-blackcup.jpg';
import useDeviceSize from "@/hooks/useDeviceSize";

export default function PlanBackgroundImg() {
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
                    alt="black cup"
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
            }
        </>
    )
}