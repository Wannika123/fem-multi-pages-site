import PlanBackgroundImg from './PlanBackgroundImg';
import styles from './PlanIntro.module.css';

export default function PlanIntro() {
    return (
        <div className={styles.container}>
            <PlanBackgroundImg />
            <div className={styles['text-container']}>
                <h2>Create a plan</h2>
                <p>
                    Build a subscription plan that best fits your needs. We offer an assortment of the best 
                    artisan coffees from around the globe delivered fresh to your door.
                </p>
            </div>
        </div>
    )
}