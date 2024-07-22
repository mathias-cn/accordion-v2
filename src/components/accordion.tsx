interface AccordionProps {
    accordionObj: {
        id: number
        question: string,
        answer: string,
        opened: boolean
    }
    onAccordionClick: (id: number) => void
}

export function Accordion({ accordionobj, onAccordionClick }: AccordionProps) {
    return (
        <div></div>
    )
}