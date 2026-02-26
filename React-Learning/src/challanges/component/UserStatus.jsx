function UserStatus({loggedIn,isAdmin}){
 
    
    return<>
    {
        loggedIn && isAdmin?<h1>Welcome Admin</h1>:<></>
    }
    {
        loggedIn && !isAdmin?<h1>Welcome user</h1>:<></>
    }
    </>
}
export default UserStatus;