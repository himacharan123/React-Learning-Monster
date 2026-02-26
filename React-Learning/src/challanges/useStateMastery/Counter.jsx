import { useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);
    return<>
    <h1>{count}</h1>
 <button onClick={()=>setCount((prev)=>prev+1)}>Increase Count by 1</button>
 <button style={{margin:"3px"}}onClick={()=>setCount((prev)=>prev-1)}>decrease Count by 1</button>
    
    </>
}
export default Counter;