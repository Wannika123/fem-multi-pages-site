import styles from './WhyChooseUs.module.css';
import Image from 'next/image';
import coffeeIcon from '@/assets/home/desktop/icon-coffee-bean.svg';
import giftIcon from '@/assets/home/desktop/icon-gift.svg';
import truckIcon from '@/assets/home/desktop/icon-truck.svg';

const FEATURES =[
    {
        imgSrc: coffeeIcon,
        imgAlt: 'coffee icon',
        h3: 'Best quality',
        p: "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
    },
    {
        imgSrc: giftIcon,
        imgAlt: 'gift icon',
        h3: 'Exclusive benefits',
        p: 'Special offers and swag when you subscribe, including 30% off your first shipment.'
    },
    {
        imgSrc: truckIcon,
        imgAlt: 'truck icon',
        h3: 'Free shipping',
        p: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
    }
]

export default function WhyChooseUs() {
    return (
        <>
            <div className={styles.introContainer}>
                <div>
                    <h2>Why choose us?</h2>
                    <p>
                        A large part of our role is choosing which particular coffees will be featured 
                        in our range. This means working closely with the best coffee growers to give 
                        you a more impactful experience on every level.
                    </p>
                </div>
            </div>

            <div className={styles.featuresContainer}>
                <div className={styles.featuresContainerBg}></div>
                { FEATURES.map(item => (
                    <div className={styles.feature} key={item.h3}>
                        <div className={styles.imgContainer}>
                            <Image src={item.imgSrc} alt={item.imgAlt} />
                        </div>
                        <div>
                            <h3>{item.h3}</h3>
                            <p>{item.p}</p>
                        </div>
                    </div>
                ))}
            </div>            
        </>       
    )
}