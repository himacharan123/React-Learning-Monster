import { useRef } from "react";

const FocusInput=()=>{
const myInput=useRef(null);
function handleClick(){
   myInput.current.focus();
}
return<>
<input ref={myInput} type="text"/>
<button onClick={handleClick}>Enter</button>
</>
};
export default FocusInput;