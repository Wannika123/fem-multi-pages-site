import DetailWrapper from "./DetailWrapper"

const DETAILS = [
    {
        question: 'How do you drink your coffee?',
        choices: [
            {
                h3: 'Capsule',
                p: 'Compatible with Nespresso systems and similar brewers'
            },
            {
                h3: 'Filter',
                p: 'For pour over or drip methods like Aeropress, Chemex, and V60'
            },
            {
                h3: 'Espresso',
                p: 'Dense and finely ground beans for an intense, flavorful experience'
            }
        ]
    },
    {
        question: 'What type of coffee?',
        choices: [
            {
                h3: 'Single origin',
                p: 'Distinct, high quality coffee from a specific family-owned farm'
            },
            {
                h3: 'Decaf',
                p: 'Just like regular coffee, except the caffeine has been removed'
            },
            {
                h3: 'Blended',
                p: 'Combination of two or three dark roasted beans of organic coffees'
            }
        ]
    },
    {
        question: 'How much would you like?',
        choices: [
            {
                h3: '250g',
                p: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
            },
            {
                h3: '500g',
                p: 'Perfect option for a couple. Yields about 40 delectable cups.'
            },
            {
                h3: '1000g',
                p: 'Perfect for offices and events. Yields about 90 delightful cups.'
            }
        ]
    },
    {
        question: 'Want us to grind them?',
        choices: [
            {
                h3: 'Wholebean',
                p: 'Best choice if you cherish the full sensory experience'
            },
            {
                h3: 'Filter',
                p: 'For drip or pour-over coffee methods such as V60 or Aeropress'
            },
            {
                h3: 'Cafetiére',
                p: 'Course ground beans specially suited for french press coffee'
            }
        ]
    },
    {
        question: 'How often should we deliver?',
        choices: [
            {
                h3: 'Every week',
                p: '$14.00 per shipment. Includes free first-class shipping.'
            },
            {
                h3: 'Every 2 weeks',
                p: '$17.25 per shipment. Includes free priority shipping.'
            },
            {
                h3: 'Every month',
                p: '$22.50 per shipment. Includes free priority shipping.'
            }
        ]
    }
]

export type DetailType = typeof DETAILS[number];

export type DetailsProps = {
    focusedTopic: number | undefined
    updateFocusedTopic: (index: number | undefined) => void
    updateCustomerChoices: (value: string, index: number) => void
    customerChoices: string[]
}

export default function Details(props: DetailsProps) {
    return (
        <div>
            {DETAILS.map((item, index) => (
                <DetailWrapper item={item} index={index} {...props} />
            ))}
        </div>
    )
}