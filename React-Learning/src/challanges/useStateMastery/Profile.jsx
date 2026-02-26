import { useState } from "react";

const Profile = () => {
    const [myProfile, setMyProfile] = useState({
        name: "hima charan",
        age: 23
    });
    const [updateProfile, setUpdateProfile] = useState({
        name: "",
        age: "",

    });
    function handleFieldUpdate(e) {
        setUpdateProfile((prev) => ({ ...prev, name: e.target.value }));
    }
    function handleAgeUpdate(e) {
        setUpdateProfile((prev) => ({ ...prev, age: e.target.value }));
    }

    function handleProfileUpdate(){
        setMyProfile((prev)=>({...prev,...updateProfile}));
        setUpdateProfile({
            name:"",
            age:""
        })
    }
    return <>
       <div style={{margin:"5px"}}>
         <h1>My Profile</h1>
        <h3>Name :{myProfile.name}</h3>
        <h3>Age : {myProfile.age}</h3>
        <h2>Fill form to update the profile</h2>
        <input style={{margin:"3px"}} type="text" value={updateProfile.name} onChange={handleFieldUpdate} placeholder="Enter the updated Name here" />
        <input style={{margin:"3px"}} type="number" value={updateProfile.age} onChange={handleAgeUpdate} placeholder="Enter the Updated Age " />
        
      <button  style={{margin:"3px"}} onClick={handleProfileUpdate}>Update Profile</button>
       </div>
    </>
};
export default Profile;