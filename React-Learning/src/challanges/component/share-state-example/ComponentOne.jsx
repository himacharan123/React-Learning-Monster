function ComponentOne({count,changeCounthandler}){
    return<>
<h3>{count}</h3>
<button onClick={changeCounthandler}>Increase Count </button>

    </>
}
export default ComponentOne;