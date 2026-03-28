import { useState } from "react"

function Accordian({ question, answer }) {
    const [active, setIsActive] = useState(false);
    function handleAccordian(){
        setIsActive(!active);
    }
    return <div className="accordian-container">
            <div className="question-container">
                <h2>{question} <button onClick={handleAccordian}>{active ? "-" : "+"}</button></h2>
                </div>
                <div className="answer-container">
                  {active? answer:""}
                </div>
        </div>

    
}

export default Accordian;