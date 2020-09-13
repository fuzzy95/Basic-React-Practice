import React from 'react';

const ComponentValidation = (props) => {
    let validationMessage = "Text long enough";

    if (props.inputLength <= 8) {
        validationMessage = "Text too short";
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default ComponentValidation;


//---------------------One Approach----------------
// {
//     props.inputLength > 7 ?
//         <p>Text too long</p> :
//         <p>Text too short</p>
// }