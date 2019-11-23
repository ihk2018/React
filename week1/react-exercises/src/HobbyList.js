import React from "react"
import Hobby from './Hobby';

function HobbyList (props){
    
    return (<ul className='hobbyList'>
        {props.hobby.map(item => (
               <Hobby hobby={item} ></Hobby>
             ))}
        </ul>)
    }
    export default HobbyList;