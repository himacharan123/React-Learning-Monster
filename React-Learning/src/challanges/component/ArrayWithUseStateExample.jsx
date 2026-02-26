import { useState } from "react"

const ArrayWithUseStateExample = () => {
    const [myfriends, setMyfriends] = useState(["Vijay", "Scam", "Srihith"]);
    const [addfriend, setAddFriend] = useState("");
    const [clicked, setIsAddClicked] = useState(false);
    const [isRemove, setIsRemoveClicked] = useState(false);
    const [removeFriend, setRemoveFriend] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [oldfriend, setOldFriend] = useState("");
    const [updateFriend, setUpdateFriend] = useState("");

    function handleInputChange(e) {
        setAddFriend(e.target.value);

    }
    function handleAddFriend() {
        setMyfriends((prev) => [...prev, addfriend]);
        setAddFriend("");
        setIsAddClicked(false);
    }
    function handleUpdateFriend() {
        setMyfriends((prev) => prev.map((friend) =>
            friend == oldfriend ? updateFriend : friend
        ));
        setOldFriend("");
        setUpdateFriend("");
        setIsUpdate(false);

    }
    function handleFriendRemove(removeFriend) {
        setMyfriends((prev) =>
            prev.filter((friend) => friend != removeFriend));
        setRemoveFriend("");
        setIsRemoveClicked(false);

    }

    return <>
        <h1>My Friends</h1>
        {
            myfriends.map((friend, index) => <h1 key={index}>
                {friend}
            </h1>)
        }

        <button onClick={() => setIsAddClicked(true)}>Add Friend</button>

        {
            clicked && <><input value={addfriend} onChange={handleInputChange} style={{ margin: "3px" }} placeholder="Enter your Friend name" />
                <button style={{ margin: "3px" }} onClick={handleAddFriend}>Confirm</button>


            </>

        }
        <button style={{ margin: "3px" }} onClick={() => setIsRemoveClicked(true)}>Remove Friend</button>

        {
            isRemove && <><input value={removeFriend} onChange={(e) => setRemoveFriend(e.target.value)} style={{ margin: "3px" }} placeholder="Enter your Friend name" />
                <button style={{ margin: "3px" }} onClick={() => handleFriendRemove(removeFriend)}>Confirm</button></>
        }
        <button onClick={()=>setIsUpdate(true)} style={{ margin: "3px" }}>Update Friend</button>

        {
            isUpdate && <><input style={{ margin: "3px" }} type="text" value={oldfriend} onChange={(e) => setOldFriend(e.target.value)} placeholder="Enter the current friend name" />
                <input style={{ margin: "3px" }} type="text" value={updateFriend} onChange={(e) => setUpdateFriend(e.target.value)} />
                <button style={{ margin: "3px" }} onClick={handleUpdateFriend}>Confirm</button>
            </>

        }
    </>
}
export default ArrayWithUseStateExample;