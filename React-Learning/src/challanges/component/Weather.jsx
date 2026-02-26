
function Weather({temperature}){
    if(temperature<15)
    return <p>It's is cold outside</p>
    if(temperature>15 && temperature<=25 )
        return <p>It's nice Outside</p>
    if(temperature>25)
        return <p>It is hot outside</p>
}
export default Weather