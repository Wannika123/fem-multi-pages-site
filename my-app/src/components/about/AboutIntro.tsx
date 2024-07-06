import AboutBackgroundImg from './AboutBackgroundImg';
import styles from './AboutIntro.module.css';

export default function AboutIntro() {
    return(
        <div className={styles.container}>
            <AboutBackgroundImg />
            <div className={styles['text-container']}>
                <h2>About us</h2>
                <p>
                Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
  coffee from around the world. We have since been dedicated to bring the perfect cup - from 
  bean to brew - in every shipment.
                </p>
            </div>
        </div>
    )
}