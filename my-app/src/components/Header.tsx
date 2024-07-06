import Image from "next/image";
import Link from "next/link";
import logo from  '@/assets/shared/desktop/logo.svg';
import styles from "./Header.module.css";
import Navbar from "./Navbar";

export default function Header() {
    
    return (
        <header className={styles.header}>
            <Link href='/'>
                <Image src={logo} alt="logo icon" priority />
            </Link>
            <Navbar />
        </header>
    )
} 