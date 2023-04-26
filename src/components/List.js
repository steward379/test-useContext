import React from 'react';
import MyButton from './MyButton.js';

function List(props){
    if(props.data === null){
        return <div>loading...</div>;
    }
        return <ul>
        {props.data.map((item, index) => {
            if(item.important){
                return <li key={index} style={{fontWeight:"bold"}}>
                    <span>{item.text}</span>
                    <MyButton text="x" execute={()=> {
                            props.remove(index);
                        }}>
                    </MyButton>
                </li>
            }else{
                return <li key={index}>
                    <span>{item.text}</span>
                    <MyButton text="x" execute={()=> {
                            props.remove(index);
                        }}>
                    </MyButton>
                </li>
            }
        })}
    </ul>
    }

export default List;