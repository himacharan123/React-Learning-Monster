import { useContext, useState } from "react";
import { UserContext } from "./UserContext"


function UpdateUser() {
    const { updateUser } = useContext(UserContext);
    const [newName, setNewName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newName.trim()) {//Only run the code below if newName is not empty (after removing extra spaces).”
            updateUser(newName);
            setNewName("");
        }
    }
    return <>
        <h1>Update User</h1>
        <form onSubmit={handleSubmit}>
            <input value={newName} onChange={(e) => setNewName(e.target.value)} type="text" />
            <button type="submit">Update</button>
        </form>
    </>
}

export default UpdateUser;