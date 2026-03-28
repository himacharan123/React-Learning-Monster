import { useId } from "react";

function UniqComponent(){
    const uniqId= useId();
    return<>
    <label htmlFor={`${uniqId}--name`}>Name</label>
    <input type="text" id ={`${uniqId}--name`} placeholder="Enter Name"/>

     <label htmlFor={`${uniqId}--email`}>Email</label>
    <input type="text" id ={`${uniqId}-email`} placeholder="Enter Name"/>
    </>
}

export default UniqComponent;