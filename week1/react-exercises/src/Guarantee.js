import React from 'react';



function Guarantee (props){
    return (
        <div className='guarantee'>
          <img src = {props.image} alt = {props.alt}/>
          <h3 className= 'title'>{props.title}</h3>
    <span className='descriptipn'>{props.description}</span>
        </div>
    
 );
}

export default Guarantee; 