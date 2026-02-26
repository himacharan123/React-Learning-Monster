function Greeting(){
    let name ="Hima Charan"
    return <div>
<h1>Good Afternoon {name}</h1>
<p>Today's date is {new Date().toLocaleDateString()}</p>
    </div>
}

export default Greeting;