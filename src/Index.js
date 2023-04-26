import "./Index.scss";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ThemeContext from "./context/ThemeContext";
import LanguageContext from "./context/LanguageContext";
import Nav from "./Nav";
import Welcome from "./Welcome";
import Main from "./Main";

function App() {
  const [theme, setTheme] = useState("light");
  const [pageName, setPageName] = useState("home");

  let Chinese = {
    important: "💥重要",
    text: "💥文字",
    add: "💥新增",
  };
  let English = {
    important: "💥Important",
    text: "💥Text",
    add: "💥Add",
  };
  let [words, setWords] = useState(Chinese);

  let changePageName = (name) => {
    setPageName(name);
  };
  let page;
  if (pageName === "home") {
    page = (
      <>
        <Welcome color="red"></Welcome>
        <Main pageName={pageName}></Main>
      </>
    );
  } else if (pageName === "1" || pageName === "2") {
    page = <Main pageName={pageName}></Main>;
  }
  return (
    <LanguageContext.Provider value={words}>
      <ThemeContext.Provider value={theme}>
        <Nav setTheme={setTheme} changePageName={changePageName} />
        {page}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

let root = createRoot(document.querySelector("#root"));
root.render(<App></App>);
// root.render(<>
//     {nav}
//     {welcome}
//     {main}
// </>);

// document.body.appendChild(nav);
