import Link from "next/link";
import styles from './CreateBtn.module.css'

export default function CreateBtn() {
    return (
        <Link href='/plan'><button className={styles.button}>Create your plan</button></Link>
    )
}