import { useState } from "react";

const TodoApp = () => {
    const [myTodoList, setMyTodoList] = useState([]);
    const [itemValue, setItemValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(itemValue.trim()!=="")
        setMyTodoList(prev => [...prev, itemValue]);
        setItemValue("");
    }

    function handleRemoveItem(index) {
  console.log(index)
        setMyTodoList(prev=>prev.filter((_,i)=>i!=index));
    }
    return <div>

        <div className="todo-form-conatiner">
            <form onSubmit={handleSubmit}>
                <input type="text" value={itemValue} onChange={(e) => setItemValue(e.target.value)} />
                <button style={{ margin: '3px' }} type="submit">Confirm</button>
            </form>
        </div>

        <div className="todo-list container">
            <h3>ToDO List</h3>
            {
                myTodoList.map((item, index) =>
                    <li key={index}>{item} <button style={{ margin: '2px', color: "red" }} onClick={() => handleRemoveItem(index)}>X</button></li>
                )
            }
        </div>
    </div>
};

export default TodoApp;