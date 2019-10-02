import React from 'react';

const gameCreate = (props) => {
   return(
    <div>
        <p> This is: {props.name}</p>
        <p> Estimated Time: {props.time}</p>
        <p> Difficulty: {props.difficulty}</p>
    </div>
    );
   
}

export default gameCreate;
