function Greetingcd({timeOfDay}){
    
    return <>
       {
         timeOfDay==="morming"?<h1>Good Morning</h1>:<h1>Good Afternoon</h1>
       }
    </>
}
export default Greetingcd;