interface AccordionProps {
    index: number
    accordionObj: {
        id: number
        question: string,
        answer: string,
        opened: boolean
    }
    onAccordionClick: (id: number) => void
}

export function Accordion({ index, accordionObj, onAccordionClick }: AccordionProps) {
    let newIndex: number | string = index
    if(newIndex < 10) newIndex = "0" + index

    if(accordionObj.opened) {
        return (
            <div onClick={() => onAccordionClick(accordionObj.id)} className="cursor-pointer border-t-8 border-green-600 font-semibold py-4 px-8 bg-gray-100 rounded-lg w-full flex gap-6 items-start justify-between text-2xl text-left">
                <span className="text-green-600">{newIndex}</span>
                <div className="flex-1 space-y-4">
                    <h2 className="text-green-600">{accordionObj.question}</h2>
                    <p className="text-lg font-normal">{accordionObj.answer}</p>
                </div>
                <span>-</span>
            </div>
        )
    }
    return (
        <div onClick={() => onAccordionClick(accordionObj.id)} className="cursor-pointer font-semibold py-4 px-8 bg-gray-100 rounded-lg w-full flex gap-6 items-start justify-between text-2xl text-left">
            <span>{newIndex}</span>
            <div className="flex-1">
                <h2>{accordionObj.question}</h2>
            </div>
            <span>+</span>
        </div>
    )
}