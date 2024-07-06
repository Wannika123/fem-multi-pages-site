import styles from './HowItWorks.module.css'

const HOW_IT_WORKS = [
    {
        h1: '01',
        h2: 'Pick your coffee',
        p: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
    },
    {
        h1: '02',
        h2: 'Choose the frequency',
        p: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
    },
    {
        h1: '03',
        h2: 'Receive and enjoy!',
        p: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
    }
]

type HowItWorksProps = {
    textColor: string
}

export default function HowItWorks({ textColor }: HowItWorksProps) {

    return (
        <div className={styles.container}>

            <div className={styles.line}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div 
                className={styles['contents-container']}
                style={{ color: textColor }}
            >
                { HOW_IT_WORKS.map(item => (
                    <div key={item.h1} className={styles.content}>
                        <div className={styles.circle}></div>
                        <h1>{item.h1}</h1>
                        <h2>{item.h2}</h2>
                        <p>{item.p}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}