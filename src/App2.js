import './App.css';
import CreateTodo from './Components/CreateTodo';
import TodoList from './Components/TodoList';
import { useReducer, useRef } from 'react';

const initialState = {
    input: {
        usertext: "",
    },
    lists: [
        {
            id:1,
            usertext:'',
            active:false,
        }
    ]
}
function reducer(state, action){
    switch(action.type){
        case "CHANGE_INPUT":
        return {
            ...state.input,
            [action.name]: action.value,
        };
        case "CTREATE_TEXT":
        return {
            input: initialState.input,
            lists: state.lists.concat(action.list),
        };
        case "DELETE_TEXT":
        return {
            ...state,
            lists: state.lists.filter( list => list.id !== action.id ),
        };
        case "ACTIVE_TEXT":
        return {
            ...state,
            lists: state.lists.map( list => 
                list.id === action.id ? { ...list, active: !list.active } : list )
        };
        default:
        return state;
    }
}
function App() {
    const [ state, dispatch ] = useReducer(reducer,initialState);
    const { lists } = state;
    const { usertext } =state.input;

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: "CHANGE_INPUT",
            name: name,
            value: value,
        })
    }
    //list추가하는 함수
    const onCreate = () => {
        dispatch({
            type: "CTREATE_TEXT",
            list: {
                id: nextLi.current,
                usertext: usertext,
                // active: false,
            }
        })
        nextLi.current += 1;
    }
    const onDelete = (id) => {
        dispatch({
            type: "DELETE_TEXT",
            id: id,
        })
    }
    const onToggle = (id) => {
        dispatch({
            type: "ACTIVE_TEXT",
            id: id,
        })
    }
    const nextLi = useRef(2); 
    return (
        <div className="App">
        <CreateTodo usertext={usertext} onChange={onChange} onCreate={onCreate}/>
        <TodoList lists={lists} onDelete={onDelete} onToggle={onToggle}/>
        </div>
    );
}

export default App;
