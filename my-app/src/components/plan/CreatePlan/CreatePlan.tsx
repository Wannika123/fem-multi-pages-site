'use client';

import { useState } from "react";
import Topics from "./Topics";
import Details from "./Details";
import Summary from "./Summary";
import styles from './CreatePlan.module.css'
import Dialog from "./Dialog";

export default function CreatePlan() {
    const [focusedTopic, setFocusedTopic] = useState<number>();
    const [customerChoices, setCustomerChoices] = useState(['', '', '', '', '']);
    const [dialogOpening, setDialogOpening] = useState(false)

    const updateFocusedTopic = (index: number | undefined) => {
        setFocusedTopic(index)
    }

    const updateCustomerChoices = (value: string, index: number) => {
        const newState = [...customerChoices];
        newState[index] = value;
        setCustomerChoices(newState);
    }

    const summaryText = (textColor: string) => {
        return (
            <div style={{ color: textColor }}>
                <p className={styles['summary-text']}>
                    &quot;I drink my coffee {customerChoices[0] === "Capsule" ? 'using' : 'as'}{' '}
                    <span>{customerChoices[0] ? customerChoices[0] : '_____'}</span>
                    , with a{' '}
                    <span>{customerChoices[1] ? customerChoices[1] : '_____'}</span>{' '}
                    type of bean.{' '}
                    <span>{customerChoices[2] ? customerChoices[2] : '_____'}</span>
                    { customerChoices[0] !== "Capsule" &&
                        <>
                            {' '}
                            { customerChoices[3] !== 'Wholebean' 
                                ? 'ground ala' 
                                : '' 
                            }{' '}
                            <span>{customerChoices[3] !== '' ? customerChoices[3] : '_____'}</span>
                        </>
                    }
                    , sent to me{' '}
                    <span>{customerChoices[4] ? customerChoices[4] : '_____'}</span>.&quot;
                </p>
            </div>
        )
    }

    const openDialog = () => {
        setDialogOpening(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.topics}>
                <Topics 
                    focusedTopic={focusedTopic}
                    updateFocusedTopic={updateFocusedTopic}
                    customerFirstChoice={customerChoices[0]} 
                />
            </div>
            <form>
                <Details 
                    focusedTopic={focusedTopic}
                    updateFocusedTopic={updateFocusedTopic}
                    updateCustomerChoices={updateCustomerChoices}
                    customerChoices={customerChoices}
                />
                <Summary 
                    summaryText={summaryText('#fff')}
                    openDialog={openDialog}
                    customerChoices={customerChoices}
                />
                <Dialog 
                    dialogOpening={dialogOpening}
                    summaryText={summaryText('#83888f')}
                />
            </form>          
        </div>
    )
}