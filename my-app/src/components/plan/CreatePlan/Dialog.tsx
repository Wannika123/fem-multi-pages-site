import { useRef } from "react"
import styles from './Dialog.module.css'

type dialogProps = {
    dialogOpening: boolean
    summaryText: JSX.Element
}

export default function Dialog({ dialogOpening, summaryText }: dialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    if (dialogRef.current) {
        if (dialogOpening) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }  

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <div className={styles['header-container']}>
                <h2>Order Summary</h2>
            </div>
            <div className={styles['text-container']}>
                <div>{summaryText}</div>
                <p className={styles.paragraph}>
                Is this correct? You can proceed to checkout or go back to plan selection if something 
                is off. Subscription discount codes can also be redeemed at the checkout.
                </p>
            </div>
            <div className={styles['button-container']}>
                <div>$14.00 / mo</div>
                <button type="submit">Checkout</button>
            </div>
        </dialog>
    )
}