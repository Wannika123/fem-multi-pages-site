import styles from './Topics.module.css';

type TopicProps = {
    focusedTopic: number | undefined
    updateFocusedTopic: (index: number | undefined) => void
    customerFirstChoice: string
}

export default function Topics({ focusedTopic, updateFocusedTopic, customerFirstChoice }: TopicProps) {

    return (
        <div className={styles.container}>
            <div 
                onClick={() => updateFocusedTopic(0)}
                className={ focusedTopic === 0 ? styles.focused : undefined}
            >
                <span>01</span>Preferences
            </div>
            <hr />
            <div 
                onClick={() => updateFocusedTopic(1)}
                className={ focusedTopic === 1 ? styles.focused : undefined}
            >
                <span>02</span>Bean type
            </div>
            <hr />
            <div 
                onClick={() => updateFocusedTopic(2)}
                className={ focusedTopic === 2 ? styles.focused : undefined}
            >
                <span>03</span>Quantity
            </div>
            <hr />
            <div 
                onClick={() => updateFocusedTopic(3)}
                className={ customerFirstChoice === "Capsule"
                    ? styles.disabled
                    : focusedTopic === 3
                        ? styles.focused
                        : undefined
                }
            >
                <span>04</span>Grind option
            </div>
            <hr />
            <div 
                onClick={() => updateFocusedTopic(4)}
                className={ focusedTopic === 4 ? styles.focused : undefined}
            >
                <span>05</span>Deliveries
            </div>
        </div>
    )
}