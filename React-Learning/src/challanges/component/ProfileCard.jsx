function ProfileCard({title,description}){
    const styleObject= {
        padding:"15px",
        border:"8px",
        color:"black"
    };
    return<div style={styleObject}>
 <p>{title}</p>
 <p>{description}</p>
    </div>
}

export default ProfileCard;