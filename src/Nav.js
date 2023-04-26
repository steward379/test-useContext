import "./Nav.scss";
import React, {useState} from "react";

function Nav(props){ 
    const [menuVisible, setMenuVisible] = useState(false);
    let [dark, setDark] = useState(false);
    let [ eng, setEng] = useState(false);

    let changeDark = () => {
        dark = !dark;
        setDark(dark);
        props.setTheme(dark?"dark":"light");
    };
    let changeEng = () => {
        eng = !eng;
        setDark(eng);
        props.setWords(eng?props.English:props.Chinese);
    };
    const handleTriggerClick = () => {
      setMenuVisible(!menuVisible);
    };  

    return <nav>
        <div className="title" onClick={()=>{
                props.changePageName("home");
            }}>MyWebsite</div>
        <div className={`menu ${menuVisible ? "visible" : ""}`}>
            <button className={`menu-hide ${menuVisible ? "visible" : ""}`} onClick={handleTriggerClick}>[X]</button>
            <div onClick={()=>{
                props.changePageName("1");
            }} className="item">item1</div>
            <div onClick={()=>{
                props.changePageName("2");
            }}className="item">item2</div>
            <div className="item">item3</div>
            <div className="item">
            Dark <input type="checkbox" checked={dark} onChange={changeDark}></input>
            </div>
            <div className="item">
            Eng <input type="checkbox" checked={eng} onChange={changeEng}></input>
            </div>
        </div>
        <div className="trigger" onClick={handleTriggerClick}>
            <button>Open</button>
        </div>
    </nav>;
};
export default Nav;

// let title = React.createElement("div", { className: "title"}, "web title");
// let items = [];
// for(let i=1; i<3; i++){
//     let item = React.createElement("div", { className: "item"}, `item${i}`);
//     items.push(item);
// };
// let menu = React.createElement("div", { className: "menu"}, items);
// let nav = React.createElement("nav", {}, [title, menu]);


// let nav = document.createElement("nav");
// //title
// let title = document.createElement("div");
// title.className="title";
// let textNode = document.createTextNode("MyWebsite");
// title.appendChild(textNode);
// nav.appendChild(title);
// //menu
// let menu = document.createElement("div");
// let trigger = document.createElement("div");
// trigger.className="trigger";
// title.appendChild(trigger);
// let button = document.createElement("button");
// button.textContent="Open";
// button.addEventListener("click",function(){
//     menu.style.display="block";
// });
// trigger.appendChild(button);

// menu.className="menu";
// for(let i=1;i<=3;i++){
//     let item = document.createElement("div");
//     item.className="item";
//     item.textContent="item"+ i ;
//     menu.appendChild(item);
// }
// nav.appendChild(menu);