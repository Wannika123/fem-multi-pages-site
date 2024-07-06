import styles from './Summary.module.css'

type SummaryProps = {
    summaryText: JSX.Element
    openDialog: () => void
    customerChoices: string[]
}

export default function Summary({ summaryText, openDialog, customerChoices }: SummaryProps) {

    const checkCompletion = () => {
        if (customerChoices.every(choice => choice !== '')) {
            return true
        }
        if (customerChoices[0] === 'Capsule') {
            if (customerChoices[1] && customerChoices[2] && customerChoices[4]) {
                return true
            }
        }
        return false
    }

    const isComplete = checkCompletion();
        
    const handleClick = () => {
        if (isComplete) {
            openDialog();
        }
    }

    return (
        <>
            <div className={styles.container}>   
                <h4>ORDER SUMMARY</h4>    
                {summaryText}               
            </div>
            <div className={styles['button-container']}>
                <button type='button' onClick={handleClick} className={!isComplete ? styles.disabled : undefined}>
                    Create my plan!
                </button>
            </div>
        </>
    )
}