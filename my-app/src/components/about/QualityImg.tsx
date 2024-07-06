'use client';

import mobile from '@/assets/about/mobile/image-quality.jpg';
import tablet from '@/assets/about/tablet/image-quality.jpg';
import desktop from '@/assets/about/desktop/image-quality.jpg';
import Image from 'next/image';
import useDeviceSize from '@/hooks/useDeviceSize';

export default function QualityImg() {
    const [width, height] = useDeviceSize()

    return (
        <>
            { width !== 0 &&
                <Image
                src={ width >= 1040 
                    ? desktop
                    : width >= 720
                        ? tablet
                        : mobile
                }
                alt="A cup of coffee, with latte art on top."
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
            }
        </>       
    )
}