const UserList = () => {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
    ];
    return <>
        {
            users.map(({ id, name, age }) => 
                
                    <div key={id}>
                        <h1> name :{name}</h1>
                        <h1> age :{age}</h1>
                    </div>
                
            )
        }
    </>
};

export default UserList;