import styles from './HomeIntro.module.css';
import CreateBtn from '../CreateBtn';
import HomeBackgroundImg from './HomeBackgroundImg';

export default function HomeIntro() {
    return (
        <div className={styles.container}>
            <HomeBackgroundImg />
            <div className={styles['content-container']}>
                <h1>Great coffee made simple.</h1>
                <p>
                    Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                    coffees from our best roasters delivered directly to your door, at your schedule.
                </p>
                <CreateBtn />
            </div>
        </div>
    )
}
