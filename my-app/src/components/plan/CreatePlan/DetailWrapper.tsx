import { useEffect, useState } from "react";

import { DetailType, DetailsProps } from "./Details";
import arrow from '@/assets/plan/desktop/icon-arrow.svg';
import Image from "next/image";
import styles from './DetailWrapper.module.css';

type DetailWrapperProps = DetailsProps & {
    item: DetailType
    index: number
}

export default function DetailWrapper({ 
    item, 
    index, 
    focusedTopic, 
    updateFocusedTopic, 
    updateCustomerChoices,
    customerChoices
}: DetailWrapperProps) {

    const [detailShowing, setDetailShowing] = useState(false);

    const showHideDetail = () => {
        if (detailShowing) {
            setDetailShowing(false);
            updateFocusedTopic(undefined)
        } else {
            setDetailShowing(true);
            updateFocusedTopic(index);
        }
    }

    let detailShowingCondition: boolean;    
    if (detailShowing) {
        if (customerChoices[0] === 'Capsule' && index === 3) {
            detailShowingCondition = false
        } else {
            detailShowingCondition = true
        }
    } else {
        detailShowingCondition = false
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateCustomerChoices(e.target.value, index);
        updateFocusedTopic(index);
    }

    useEffect(() => {
        if (focusedTopic === index) {
            setDetailShowing(true);
        }
    }, [focusedTopic])

    return (
        <div className={styles.container}>
            <div 
                onClick={showHideDetail} 
                className={customerChoices[0] === 'Capsule' && index === 3 
                    ? `${styles['question-container']} ${styles.disabled}`
                    : styles['question-container'] }
            >
                <div>{item.question}</div>
                <Image 
                    src={arrow} 
                    alt="arrow icon" 
                    className={detailShowingCondition ? styles['arrow-up'] : undefined} 
                />
            </div>
            { detailShowingCondition && 
                <div className={styles['choice-container']}> 
                    { item.choices.map((choice, i) => (
                        <div key={`question no.${index + 1}, choice no.${i}`}>
                            <input 
                                className={styles.radio}
                                type="radio" 
                                name={`question no.${index + 1}`} 
                                value={choice.h3} 
                                id={choice.h3 + index}
                                onChange={handleChange}
                                checked={customerChoices[index] === choice.h3}
                            />
                            <label htmlFor={choice.h3 + index} className={styles.label}>
                                <h3>{choice.h3}</h3>
                                <p>{choice.p}</p>
                            </label>
                        </div>
                    ))}
                </div>
            }
            
        </div>
    )
}