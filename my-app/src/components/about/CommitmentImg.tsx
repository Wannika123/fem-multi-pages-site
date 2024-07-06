'use client';

import mobile from '@/assets/about/mobile/image-commitment.jpg';
import tablet from '@/assets/about/tablet/image-commitment.jpg';
import desktop from '@/assets/about/desktop/image-commitment.jpg';
import Image from 'next/image';
import useDeviceSize from '@/hooks/useDeviceSize';

export default function CommitmentImg() {
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
                    alt="A man concentrating on making a latte art."
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
            }
        </>
    )
}