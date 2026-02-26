import { useEffect, useState } from "react"

function CounterEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
       document.title=`The count Value = ${count}`
    }, [count]);

    return <>
        <h1>The Counter Effect</h1>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increase the Count </button>
    </>


};

export default CounterEffect;