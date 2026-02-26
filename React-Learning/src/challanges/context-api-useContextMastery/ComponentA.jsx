import { useContext } from "react";
import { TheAgeContainer, TheNameContainer } from "../../App";

const ComponentA = () => {
    const myName= useContext(TheNameContainer);
    const Age=useContext(TheAgeContainer);
    // return <>
    //     <TheNameContainer.Consumer>
    //         {
    //             (name) =>
    //                 <TheAgeContainer.Consumer>
    //                     {

    //                         (age) =>
    //                             <h1>{name} and {age}</h1>

    //                     }

    //                 </TheAgeContainer.Consumer>
    //         }
    //     </TheNameContainer.Consumer>

    // </>

    return<>
<h1>my name :{myName} and age : {Age}</h1>
    
    </>

}
export default ComponentA;
