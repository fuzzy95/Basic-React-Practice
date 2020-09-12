import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        border: '4px solid green',
        padding: '8px'
    };

    return <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName} />;
}

export default UserInput;
