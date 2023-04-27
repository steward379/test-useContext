import "./Index.scss"; 

import React, {useState} from "react";
import { createRoot } from "react-dom/client";

import Nav from "./Nav";
import Welcome from "./Welcome";
import Main from "./Main";

import ThemeContext from "./context/ThemeContext";
import LanguageContext from "./context/LanguageContext";
import Languages from "./data/Languages.json";

function App(){
    let [theme, setTheme] = useState("light");
    let [pageName, setPageName] = useState("home");

    let [words, setWords] = useState(Languages.Chinese);

    let changePageName = (name) => {
        setPageName(name);
    };
    let page;
    if(pageName === "home"){
        page =<>
            <Welcome color="red"></Welcome>
            <Main pageName={pageName}></Main>
        </>;
    }else if(pageName === "1" || pageName === "2"){
        page = <Main pageName={pageName}></Main>;
    }
    return <LanguageContext.Provider value={words}> 
        <ThemeContext.Provider value={theme}>
            <Nav setTheme={setTheme} setWords={setWords} changePageName={changePageName} />
            {page}
        </ThemeContext.Provider>
    </LanguageContext.Provider>;
}

let root =createRoot(document.querySelector("#root"));
root.render(<App></App>);
// root.render(<>
//     {nav}
//     {welcome}
//     {main}
// </>);

// document.body.appendChild(nav);