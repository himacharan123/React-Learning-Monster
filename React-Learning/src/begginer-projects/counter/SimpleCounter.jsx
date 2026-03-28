import { useState } from "react";
import "./simpleCounter.css"

const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    return <>
        <div className="container">
            <h1>The Counter APP</h1>
            <h3> Count ={count}</h3>
            <div className="btn-container">

                <button style={{ margin: '3px' }} onClick={() => setCount((prev) => prev + 1)}>+</button>
                <button style={{ margin: '3px' }} onClick={() => setCount((prev) => prev - 1)}>-</button>
            </div>
        </div>


    </>

};
export default SimpleCounter;