import { useState } from "react"

function TodoList() {

    const [myList, setMyList] = useState([]);
    const [newTodo, setMyNewTodo] = useState();
    function handleAddTodo() {
        setMyList((prev) => [...prev, newTodo]);
        setMyNewTodo("");
    }
    return <>
        <h1>Add ToDO</h1>
        <form action="">
            <input value={newTodo} onChange={(e) => setMyNewTodo(e.target.value)} type="text" />
            <button onClick={handleAddTodo}>Add Todo</button>
        </form>
        <h1>My ToDo List</h1>
        <ol>
            {
                myList.map((item,index) => <li key={index}>{item}</li>)
            }
        </ol>
    </>
}

export default TodoList;