import HowItWorks from "@/components/HowItWorks";
import PlanIntro from "@/components/plan/PlanIntro";
import styles from './page.module.css'
import CreatePlan from "@/components/plan/CreatePlan/CreatePlan";

export default function PlanPage() {
    return (
        <main>
            <section className={styles.intro}>
                <PlanIntro />
            </section>
            <section className={styles['how-it-works']}>
                <div>
                    <HowItWorks textColor="#fefcf7" />
                </div>
            </section>
            <section>
                <CreatePlan />
            </section>
        </main>
    )
}