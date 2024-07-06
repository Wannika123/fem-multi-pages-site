'use client';

import { useEffect, useState } from 'react';
import useDeviceSize from '@/hooks/useDeviceSize';

import closeIcon from '@/assets/shared/mobile/icon-close.svg';
import hamburgerIcon from '@/assets/shared/mobile/icon-hamburger.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState<boolean>();
    const [width, height] = useDeviceSize()

    useEffect(() => {
        if (width >= 720) {
            setOpenMenu(true)
        } else {
            setOpenMenu(false)
        }
    }, [width])

    const closeMenu = () => {
        if (width < 720) {
            setOpenMenu(false)
        }
    }

    return (
        <div>
            { openMenu &&
                <nav className={styles.nav}>
                    <ul>
                        <li onClick={closeMenu}><Link href='/'>HOME</Link></li>
                        <li onClick={closeMenu}><Link href='/about'>ABOUT US</Link></li>
                        <li onClick={closeMenu}><Link href='/plan'>CREATE YOUR PLAN</Link></li>
                    </ul>
                </nav>
            }
            { width !== 0 && width < 720 
                ? (
                    <button className={styles['menu-btn']} onClick={() => { setOpenMenu(state => !state) }}>
                        <Image src={ openMenu ? closeIcon : hamburgerIcon } alt='Open-close menu button' />
                    </button>
                )
                : undefined
            }
        </div>
    )
}