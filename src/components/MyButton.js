import React, { useContext} from "react";
import "../MyButton.scss";
import ThemeContext from "../context/ThemeContext.js";

function MyButton(props){
    let theme = useContext(ThemeContext);
    
    return <button 
    className={`my-button ${props.variant}`}
    onClick={props.execute}
    onChange={props.changeEvent} 
    style={props.style}>
        {props.text}
    </button>
};
export default MyButton;