import { useEffect, useRef, useState } from "react"

function Timer() {
    const [count, setCount] = useState(0);
    const myTimerId = useRef(null);
    useEffect(() => {
        

        myTimerId.current = setInterval(() => {
            console.log(myTimerId.current);
            setCount((prev) => prev + 1);
        }, 1000)
        return () => {
            clearInterval(myTimerId.current);
        }


    }, [])
    return <>
        <h1>Timer Count :{count}</h1>
        <button onClick={() => clearInterval(myTimerId.current)}>Stop Timer</button>
    </>
}

export default Timer;