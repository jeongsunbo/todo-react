import React from 'react';

const CreateTodo = ({usertext, onChange, onCreate}) => {
    return (
        <div id='top'>
            <h1>to do list</h1>
            <input name='usertext' value={usertext} onChange={onChange}/>
            <button onClick={onCreate}>+</button>
        </div>
    );
};

export default CreateTodo;