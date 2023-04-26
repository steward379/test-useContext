import React, {useEffect, useState} from 'react';
import ListForm from './ListForm.js';
import List from './List.js';

function ToDoList(props){
    
    let [data, setData] = useState([]);

    let removeItem = function(index){
        const newData = [...data];
        newData.splice(index, 1)
        setData(newData);
    }
    let addItem = function(text, important){
        const newData = [...data];
        newData.push({text:text, important:important});
        setData(newData);
    };
    // useEffect (() => {
    //     if(data === null){
    //         data = window.localStorage.getItem('data');
    //         if(data === null){
    //             data = [];
    //         }else{
    //             data = JSON.parse(data);
    //         }
    //         setData(data);
    //     }else{
    //         window.localStorage.setItem('data', JSON.stringify(data));
    //     }
    // });
    // useEffect(() => {
    //     let localData = window.localStorage.getItem('data');
    //     if (localData === null) {
    //         setData([]);
    //     } else {
    //         setData(JSON.parse(localData));
    //     }
    // }, []);
      
    // useEffect(() => {
    //     window.localStorage.setItem('data', JSON.stringify(data));
    // }, [data]);

    useEffect(() => {
        let localData = window.localStorage.getItem('data');
        if (localData === null) {
            setData([]);
        } else {
            const _data = JSON.parse(localData);

            console.log('data', _data);
            
            if (_data) {
                setData(_data);
            }
        }
    }, []);
      
    useEffect(() => {
            window.localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    return <>
        <List data = {data} remove={removeItem}></List>
        <ListForm  add={addItem}></ListForm>
    </>;
}

export default ToDoList;