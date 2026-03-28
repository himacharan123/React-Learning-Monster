import { useReducer, useState } from "react";

const intialValue = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "incrementByInput":
            return { ...state, count: state.count + action.payload }
        case "decrementByInput":
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
        <button style={{ margin: "3px" }} onClick={() => dispatch({ type: "increment" })}>Add by 1</button>
        <button style={{ margin: "3px" }} onClick={() => dispatch({ type: "decrement" })}>sub by 1</button>

        <input value={countValue} style={{ margin: "3px" }} type="text" onChange={(e) => setCountValue(e.target.value)} />
        <button style={{ margin: "3px" }} onClick={() => handleAction("incrementByInput")}>Confirm Increment By Value</button>
        <button
            onClick={() => handleAction("decrementByInput")}
            style={{ margin: "5px" }}
        >
            Confirm Increment By Value
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