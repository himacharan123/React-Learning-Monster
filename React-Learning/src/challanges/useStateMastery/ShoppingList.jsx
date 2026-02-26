import { useState } from "react";

function ShoppingList() {
    const [myCartList, setMyCartList] = useState([
    ]);
    const [addItem, setAddItem] = useState({
        name: "",
        quantity: ""
    });
    function handleAddItem(e) {
        setAddItem((prev) => ({ ...prev, name: e.target.value }));
    }
    function handleAddItemQuantity(e) {
        setAddItem((prev) => ({ ...prev, quantity: e.target.value }));
    }

    function handleAddToList(e) {
        e.preventDefault();
        setMyCartList((prev) => ([...prev, addItem]));
        setAddItem({
            name:"",
            quantity:""
        });
    }

    return <>
        <h2>Fill Form To Add Item Into Cart</h2>
        <form action="">
            <input style={{ margin: "3px" }} value={addItem.name} type="text" onChange={handleAddItem} />
            <input style={{ margin: "3px" }} value={addItem.quantity} type="number" onChange={handleAddItemQuantity} />
            <button style={{ margin: "3px" }} onClick={handleAddToList}>Confirm</button>

        </form>

        <h2>  My Cart</h2>
        {
            myCartList.map((item,index) => <h3 key={index}>Item Name :{item.name} , Quantity :{item.quantity}</h3>)
        }
    </>
}

export default ShoppingList;