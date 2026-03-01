import { useReducer, useState } from "react";

const intialValue = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + action.payload }
        case "decrement":
            return { ...state, count: state.count - action.payload }
        case "reset":
            return intialValue;
        default:
            return state;
    }
};
const CounterReducer = () => {
    const [count, dispatch] = useReducer(reducer, intialValue);
    const [countValue, setCountValue] = useState("");
    function handleAction(type) {

        const value = Number(countValue);
        if (!isNaN(value)) {
            dispatch({ type: type, payload: value });
            setCountValue("");
        }

    }
    return <>
        <h1>The Counter App Excercise</h1>
        <h2>The Current Count :{count.count}</h2>

        <input  value ={countValue}style={{ margin: "3px" }} type="text" onChange={(e) => setCountValue(e.target.value)} />
        <button type="submit" style={{ margin: "3px" }}onClick={() => handleAction("increment")}>Confirm Increment</button>
        <button
            onClick={() => handleAction("decrement")}
            style={{ margin: "5px" }}
        >
            Confirm Decrement
        </button>
        <button
            onClick={() => dispatch({ type: "reset" })}
            style={{ margin: "5px" }}
        >
            Reset
        </button>
    </>
}
export default CounterReducer;