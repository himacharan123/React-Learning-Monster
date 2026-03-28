import { useState } from "react";



const ThemeChangeToggle = () => {

    const [buttonStyle, setButtonStyle] = useState("#cac4ce");
    const [textColor, setTextColor] = useState("#242038");

    function handleClick() {
        setTextColor(prevTextColor => prevTextColor === "#cac4ce" ? "#242038" : "#cac4ce");

        setButtonStyle(prevButtonColor => prevButtonColor === "#cac4ce" ? "#242038" : "#cac4ce")
    }
    return <div className="container" style={{
        backgroundColor: buttonStyle,
        color: textColor
    }}
    >
        <div className="theme-button" >
            <button style={{
                color: textColor,
                border: `2px solid ${textColor}`,
                backgroundColor: buttonStyle
            }} onClick={handleClick}>{buttonStyle === "#cac4ce" ? "white theme" : "black Theme"}</button>
        </div>
        <div className="theme content">
            <h1> Welcome Hima Charan </h1>
        </div>

    </div>
}

export default ThemeChangeToggle;