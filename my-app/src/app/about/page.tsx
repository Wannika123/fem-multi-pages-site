import AboutIntro from "@/components/about/AboutIntro";
import Commitment from "@/components/about/Commitment";
import Headquarters from "@/components/about/Headquarters";
import Quality from "@/components/about/Quality";
import styles from './page.module.css'

export default function AboutPage() {
    return (
        <main>
            <section className={styles.intro}>
                <AboutIntro />
            </section>

            <section className={styles.commitment}>
                <Commitment />
            </section>

            <section className={styles.quality}>
                <Quality />
            </section>

            <section className={styles.headquarters}>
                <Headquarters />
            </section>
        </main>
    )
}