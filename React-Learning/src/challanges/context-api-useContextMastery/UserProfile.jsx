import { useContext } from "react"
import { UserContext } from "./UserContext"

function UserProfile() {
    const {user} = useContext(UserContext);
    console.log(user);
    
    return <div>
        <h1>Name :{user.name}</h1>
    </div>
}
export default UserProfile;