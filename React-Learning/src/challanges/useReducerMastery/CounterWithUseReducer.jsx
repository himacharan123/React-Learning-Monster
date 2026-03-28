import { useReducer } from "react"


const initialValue = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: 0 };
        default:
            return state;
    }
}
function CounterWithUseReducer() {

    const [state, dispatch] = useReducer(reducer, initialValue);
    return <>
        <h1>The Counter App</h1>
        <h2>The Current Count={state.count}</h2>
        <button style={{ margin: '3px' }} onClick={() => dispatch({ type: 'increment' })} >+</button>
        <button style={{ margin: '3px' }} onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button style={{ margin: '3px' }} onClick={() => dispatch({ type: 'reset' })}>Reset</button>

    </>
}

export default CounterWithUseReducer;