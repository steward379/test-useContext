import "./Main.scss";
import React, { useContext,useState } from "react";
import Countdown from "./components/Countdown.js";
import ToDoList from "./components/ToDoList.js";
import ProductList from "./components/ProductList.js";
import ThemeContext from "./context/ThemeContext.js";
// let main = React.createElement("div", { className: "main"}, "Hello world!");

function Main(props) {
    let theme = useContext(ThemeContext);
    let feature;
    
    if(props.pageName === "home"){
        feature =<ToDoList ></ToDoList>;
    }else if(props.pageName === "1"){
        feature =<Countdown></Countdown>
    }else if(props.pageName === "2"){
        feature =<ProductList></ProductList>;
    };
    return <main 
        style={{backgroundColor:(
            theme==="light"?"#cccccc":"#555555"
        )}}>
        {feature}
    </main>
}
export default Main;

    // let [big, setBig] = useState(100);
    // let makeBigger = function () {
    //     setBig(200);
    // };

    // let [show, setShow] = useState('inline');
    // let showIt = function () {
    //     setShow('inline');
    // }
    // let hideIt = function () {
    //     setShow('none');
    // }

    // let [text, setText] = useState("");
    // let [data, setData] = useState([]);
    // let [vital, setVital] = useState(false);
    // let [color, setColor] = useState("black");
    // let [web, setWeb] = useState(false);

    // // let list = [];
    
    // // for (let i = 0; i < data.length; i++) {
    //     // if(data[i].important){
    //     //     console.log(data[i].url.web)
    //     //     list.push(
    //     //         <li key={i} style={{fontWeight:'700'}}>
    //     //             <a href={data[i].url} style={{color:data[i].style.color}} target="_blank">
    //     //                 {data[i].text}
    //     //             </a>
    //     //             <MyButton variant="danger" clickEvent={()=>{deleteSeleced(i)}} text={"delete"}></MyButton>
    //     //         </li>
    //     //     );
    //     // }else {
    //     //     console.log(data[i].url.web)
    //     //     list.push(
    //     //         <li key={i}>
    //     //             <a href={data[i].url} style={{color:data[i].style.color}} target="_blank">
    //     //                 {data[i].text}
    //     //             </a>
    //     //             <MyButton variant="danger" clickEvent={()=>{deleteSeleced(i)}} text={"delete"}></MyButton>
    //     //         </li>
    //     //     );
    //     // }
    // // }
    // 1
    // let addItem = function () {
    //     if (text.replace(/(^s*)|(s*$)/g, "").length == 0 || !text || text.trim().length === 0) { alert("x"); return }
    //     const urlRegex = /^((http|https):\/\/[\w-]+(\.[\w-]+)+|www\.[\w-]+(\.[\w-]+)+|#\w+|\.\w+)/;
    //     // if(web.startsWith('http:') ||web.startsWith('https:')|| web.startsWith('#') || web.startsWith('.')|| web.startsWith('www')){
    //     if (urlRegex.test(web)) {
    //         setData([...data, { text: text, important: vital, style: { color: color }, url: web }]);
    //         console.log(...data);
    //         setText("");
    //     } else {
    //         alert("plz input a valid url or dom element");
    //         return
    //     }
    // }
    // let deleteSeleced = function (i){ 
    //     // let newData = [...data];
    //     // newData.splice(i, 1);
    //     // setData(newData);
    //     // setData([...data.splice(i, 1)]);
    //     setData(data.filter((_, index) => index !== i));
    // }
    // let deleteItem = function (i) {
    //     let newData = data.filter(item => item !== text);
    //     setData(newData);
    // }
    // let deleteLast = function () {
    //     setData([...data.slice(0, -1)]);
    // }
    // let changeText = function (e) {
    //     let value = e.target.value;
    //     setText(value);
    // }
    // let turnVital = function () {
    //     setVital(!vital);
    // }
    // let changeColor = function (e) {
    //     setColor(e.target.value);
    // }
    // let changeWeb = function (e) {
    //     setWeb(e.target.value);
    // }

    // return <main >
    //     <span style={{ display: show }}> my content </span>
    //     <MyButton variant="primary" clickEvent={makeBigger} style={{ width: `${big}px`, height: '100px' }} text={"main"}></MyButton>
    //     <MyButton variant="secondary" clickEvent={showIt} text={"show"}></MyButton>
    //     <MyButton variant="danger" clickEvent={hideIt} text={"hide"}></MyButton>
    //     <ul>
    //         {data.map(function (item, i) {
    //             if (item.important) {
    //                 return <li key={i} style={{ fontWeight: '700' }}>
    //                         <a href={item.url} style={{ color: item.style.color }} target="_blank">
    //                             {item.text}
    //                         </a>
    //                         <MyButton variant="danger" clickEvent={() => { deleteSeleced(i) }} text={"delete"}></MyButton>
    //                     </li>
    //             } else {
    //                 return <li key={i}>
    //                         <a href={item.url} style={{ color: item.style.color }} target="_blank">
    //                             {item.text}
    //                         </a>
    //                         <MyButton variant="danger" clickEvent={() => { deleteSeleced(i) }} text={"delete"}></MyButton>
    //                     </li>
    //             }
    //         })}
    //     </ul>
    //     <select value={color} onChange={changeColor}>
    //         <option value="black">BLACK</option>
    //         <option value="RED">RED</option>
    //         <option value="GREEN">GREEN</option>
    //     </select>
    //     IMPORTANT<input type="checkbox" checked={vital ? "checked" : ""} onChange={turnVital}></input>
    //     CONTENTS<input type="text" value={text} placeholder="contents here..." onChange={changeText}></input>
    //     WEB<input type="text" onChange={changeWeb}></input>
    //     <MyButton variant="secondary" clickEvent={addItem} text={"add"}></MyButton>
    //     <MyButton variant="danger" clickEvent={deleteItem} text={"delete"}></MyButton>
    //     <MyButton variant="danger" clickEvent={deleteLast} text={"deleteLast"}></MyButton>
    // </main>

// let textNode = document.createTextNode("Hello world!");

