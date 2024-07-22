import { AccordionItem } from "./components/accordion"

interface AccordionObj {
  id: number
  question: string
  answer: string
  opened: boolean
}

export function App() {
  const questions: AccordionObj[] = [
    {
      id: 1,
      question: "What is the origin of soccer?",
      answer: "Soccer originated in England in the mid-19th century, with the first standardized rules established by The Football Association in 1863.",
      opened: false
    },
    {
      id: 2,
      question: "How many players are on a soccer team?",
      answer: "A standard soccer team has 11 players, including one goalkeeper and ten outfield players.",
      opened: false
    },
    {
      id: 3,
      question: "What is the offside rule in soccer?",
      answer: "A player is offside if they are nearer to the opponent's goal than the ball and the second-to-last defender when the ball is passed to them and are involved in active play.",
      opened: false
    }
  ]

  return (
    <div className="text-center mx-auto max-w-2xl space-y-4 py-4">
      {questions.map((a, index) => 
        (
          <AccordionItem 
            key={index}
            index={index + 1}
            accordionObj={a}
          />
        )
      )}
    </div>
  )
}
