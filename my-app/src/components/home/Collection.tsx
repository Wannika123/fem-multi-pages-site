import granEspresso from '@/assets/home/desktop/image-gran-espresso.png';
import planalto from '@/assets/home/desktop/image-planalto.png';
import piccollo from '@/assets/home/desktop/image-piccollo.png';
import danche from '@/assets/home/desktop/image-danche.png';
import Image from 'next/image';
import styles from './Collection.module.css';

export default function Collection() {
    return (
      <div className={styles.container}>

        <h1 className={styles.backgroundText}>our collection</h1>
        <div className={styles.collectionDetails}>

          <div className={styles.detail}>
            <div className={styles.imgContainer}>
              <Image src={granEspresso} alt="Gran Espresso coffee package" />
            </div>
            <div className={styles.textDetail}>
              <h2>Gran Espresso</h2>
              <p>
                Light and flavorful blend with cocoa and black pepper for an intense experience
              </p>
            </div>
          </div>

          <div className={styles.detail}>
            <div className={styles.imgContainer}>
              <Image src={planalto} alt="Planalto coffee package" />
            </div>
            <div className={styles.textDetail}>
              <h2>Planalto</h2>
              <p>
                Brazilian dark roast with rich and velvety body, and hints of fruits and nuts
              </p>
            </div>
          </div>

          <div className={styles.detail}>
            <div className={styles.imgContainer}>
              <Image src={piccollo} alt="Piccollo coffee package" />
            </div>
            <div className={styles.textDetail}>
              <h2>Piccollo</h2>
              <p>
                Mild and smooth blend featuring notes of toasted almond and dried cherry
              </p>
            </div>
          </div>

          <div className={styles.detail}>
            <div className={styles.imgContainer}>
              <Image src={danche} alt="Danche coffee package" />
            </div>
            <div className={styles.textDetail}>
              <h2>Danche</h2>
              <p>
                Ethiopian hand-harvested blend densely packed with vibrant fruit notes
              </p>
            </div>
          </div>

        </div>

      </div>
    )
}