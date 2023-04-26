import React from "react";
import "./MyButton.scss";

function MyButton(props){
    return <button  className={`my-button ${props.variant}`} onClick={props.clickEvent} onChange={props.changeEvent} style={props.style}>
        {props.text}
    </button>
};
export default MyButton;