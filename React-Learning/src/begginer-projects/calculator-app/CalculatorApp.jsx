import { useState } from "react";


function CalculatorApp() {
    const [calValue, setCalValue] = useState("0");
    function handleButtonClick(e) {
        let value = e.target.value;

        switch (value) {
            case 'C':
                setCalValue("");
                break;
            case 'DEL':
                setCalValue(prev=>prev.length>1?prev.slice(0,-1):"0")
                break;
            case '=':
                try {
                    const expressionToEval = calValue.replace(/x/g, '*');
                    const result = new Function('return '+expressionToEval)();
                    setCalValue(result);
                }
                catch (err) {
                    setCalValue(err);
                }
                break;
            default:
                setCalValue(prev => (prev === "0" ? value : prev + value));
                break;
        }


    }
    return <div className="container">
        <div className="clac-container">
            <div>{calValue || "0"}</div>
            <div className="calc-btn-container">
                <button value="%" onClick={handleButtonClick}>%</button>
                <button value="C" onClick={handleButtonClick} >C</button>
                <button value="DEL" onClick={handleButtonClick}>{'\u232B'}</button>
                <button value="7" onClick={handleButtonClick}>7</button>
                <button value="8" onClick={handleButtonClick}>8</button>
                <button value="9" onClick={handleButtonClick}>9</button>
                <button value="x" onClick={handleButtonClick}>x</button>
                <button value="4" onClick={handleButtonClick}>4</button>
                <button value="5" onClick={handleButtonClick}>5</button>
                <button value="6" onClick={handleButtonClick}>6</button>
                <button value="-" onClick={handleButtonClick}>-</button>
                <button value="1" onClick={handleButtonClick}>1</button>
                <button value="2" onClick={handleButtonClick}>2</button>
                <button value="3" onClick={handleButtonClick}>3</button>
                <button value="+" onClick={handleButtonClick}>+</button>
                <button value="0" onClick={handleButtonClick}>0</button>
                <button value="=" onClick={handleButtonClick}>=</button>
            </div>
        </div>
    </div>


}

export default CalculatorApp;