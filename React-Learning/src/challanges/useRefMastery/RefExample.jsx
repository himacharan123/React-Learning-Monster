
import { useRef} from "react";
const RefExample=()=>{
const inputElement=useRef(null);

function handleClick(){
    inputElement.current.focus();
    inputElement.current.value="Hima Charan";
}
return<>
<input type="text" ref={inputElement}/>
<button onClick={handleClick}>Click Me !!!!</button>
</>
}
export default RefExample;