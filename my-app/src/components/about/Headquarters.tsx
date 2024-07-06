import uk from '@/assets/about/desktop/illustration-uk.svg';
import canada from '@/assets/about/desktop/illustration-canada.svg';
import australia from '@/assets/about/desktop/illustration-australia.svg';
import Image from 'next/image';
import styles from './Headquarters.module.css'

const HEADQUARTERS = [
    {
        imgSrc: uk,
        imgAlt: 'A small map of the United Kingdom',
        country: 'United Kingdom',
        addressLine1: '68 Asfordby Rd',
        addressLine2: 'Alcaston',
        addressLine3: 'SY6 1YA',
        tel: '+44 1241 918425'
    },
    {
        imgSrc: canada,
        imgAlt: 'A small map of Canada',
        country: 'Canada',
        addressLine1: '1528 Eglinton Avenue',
        addressLine2: 'Toronto',
        addressLine3: 'Ontario M4P 1A6',
        tel: '+1 416 485 2997'
    },
    {
        imgSrc: australia,
        imgAlt: 'A small map of Australia',
        country: 'Australia',
        addressLine1: '36 Swanston Street',
        addressLine2: 'Kewell',
        addressLine3: 'Victoria',
        tel: '+61 4 9928 3629'
    }
]

export default function Headquarters() {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Our headquarters</h2>
            <div className={styles['headquarters-container']}>
                { HEADQUARTERS.map(headquarter => (
                    <div key={headquarter.country} className={styles.headquarter}>
                        <Image src={headquarter.imgSrc} alt={headquarter.imgSrc} />
                        <h2>{headquarter.country}</h2>
                        <p>
                            {headquarter.addressLine1}<br/>
                            {headquarter.addressLine2}<br/>
                            {headquarter.addressLine3}<br/>
                            {headquarter.tel}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}