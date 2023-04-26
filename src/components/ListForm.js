import MyButton from './MyButton.js';
import React, {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext.js';
import LanguageContext from '../context/LanguageContext.js';

function ListForm(props){ 
    let theme = useContext(ThemeContext);
    let words = useContext(LanguageContext);
    
    let [important, setImportant] = useState(false);
    let changeImportant = (e) => {
        let checked = e.target.checked;
        setImportant(checked);
    };

    let [text, setText] = useState('');
    let changeText = (e) => {
        let value = e.target.value;
        setText(value);
    };
   
    return <>
        {words.important} <input type="checkbox" checked={important} onChange={changeImportant}></input>
        {words.text} <input type="text" value={text} onChange={changeText}></input>
        <MyButton text={words.add} execute={function(){
            props.add(text, important);
        }}></MyButton>
    </>;
}
export default ListForm;