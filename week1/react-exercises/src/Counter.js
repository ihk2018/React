import React from 'react';
import {useState} from 'react';


function Counter (props){
    const [count, setCount] = useState(0);
    const feedback = ()=>{

        return (count <11 ? `Keep counting...!` : `It is higher than 10!`);
    }
        return (
            <div className ='counterSection'>
            <button onClick = { ()=> setCount(count+1)}>Add 1</button>
            <p>{count}</p>
             <p>{feedback()}</p>
        
            </div>
        )
}

export default Counter;