import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "Hima Charan" });
    function updateUser(updatedName) {
        setUser({ name: updatedName })
    }
    return <UserContext.Provider value={{ user, updateUser }}>
        {children}
    </UserContext.Provider>
};
export default UserProvider;