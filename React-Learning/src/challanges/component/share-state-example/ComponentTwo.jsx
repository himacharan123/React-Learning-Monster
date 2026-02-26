function ComponentTwo({count,changeCounthandler}){
    return<>
    <h1>{count}</h1>
    <h3>{changeCounthandler}</h3>
    <button onClick={changeCounthandler}>Increase Count</button>
    </>
}
export default ComponentTwo;