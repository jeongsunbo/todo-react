import React from 'react';
import './ListStlye.css';
const List = ({list, onDelete, onToggle}) => {
    return (
        // className={list.active ? 'active' : "" } onClick={()=>{onToggle(list.id)}}
                <li>
                    <span className={list.active ? 'active' : "" } onClick={()=>{onToggle(list.id)}}>
                        {list.usertext}
                    </span>
                    <button onClick={()=> {
                        onDelete(list.id);
                    }}>X</button>
                </li>
    )
}
const TodoList = ({lists, onDelete, onToggle}) => {
    return (
        <div id='lis'>
            <ul>
                {lists.map(list => <List list={list} key={list.id} onDelete={onDelete} onToggle={onToggle}/>)}
            </ul>
        </div>
    );
};




export default TodoList;