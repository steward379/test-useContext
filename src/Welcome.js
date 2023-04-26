import "./Welcome.scss";
import React, { useContext, useState } from "react";
import ThemeContext  from "./context/ThemeContext";
// let welcome = React.createElement("div", { className: "welcome"}, "Welcome");
function welcome(props){
    let theme = useContext =useState(ThemeContext);
    let [text, setText] = useState("Welcome");

    let changeText = function(){
        setText("Welcome to React");
    };

    return <div onClick={changeText} className="welcome" 
                style={{color: props.color, 
                        backgroundColor:(theme ==="light"?"#dddddd":"#444444")}}> 
                {text} 
           </div>
}
export default welcome;

// let textNode= document.createTextNode("Welcome");
// welcome.appendChild(textNode);