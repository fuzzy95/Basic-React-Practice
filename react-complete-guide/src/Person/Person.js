import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default Person;


//-------------------Radium Example---------------------
// const style = {
//     '@media (min-width: 600px)': {
//         width: '450px'
//     }
// };

//-----------------------------styled components---------------
// const StyleDiv = styled.div`
//         width: 60%;
//         margin: auto;
//         border: 1px solid #eeeeee;
//         box-shadow: 0 2px 3px #cccccc;
//         padding: 16px;
//         text-align: center;

//         @media (min-width: 700px) {
//             width: 450px;
//         }
// `;