import React, {useState, useEffect} from "react";
import MyButton from "./MyButton.js";

function Countdown(){
    let [counter, setCounter]= useState(10);
    let decreaseCounter = () => {
        counter --;
        setCounter(counter);
        console.log('running...');
    };
    useEffect(() => {
        let interval = setInterval(() => {
            decreaseCounter();
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return <div>
        <div> {counter} </div>
        <MyButton text="count" execute={decreaseCounter}></MyButton>
    </div>
}

export default Countdown;