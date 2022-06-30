import './App.css';
import CreateTodo from './Components/CreateTodo';
import TodoList from './Components/TodoList';
import { useState, useRef } from 'react';

function App() {
  const [ input, setInput ] = useState({
    usertext:'',
  });
  // input에 값이 들어가면 바뀌는거
  const onChange = (e) => {
    const { name, value } = e.target;
    //값이 바뀌는거
    setInput({
      ...input,
      [name]: value,
    })
    console.log(input);
  }
  const { usertext } = input;

  const [ lists, setLists ] = useState([
    // {
    //   id: 1,
    //   usertext:'',
    //   active: false,
    // },
  ])
  const nextLi = useRef(2); 
  //list추가하는 함수
  const onCreate = () => {
    const list = {
      id: nextLi.current, 
      usertext,
      active: false,
    }
    setLists([...lists,list]);
    //버튼 클릭시 인풋에 쓴 내용 비워짐
    setInput({
      usertext:'',
    })
    nextLi.current += 1;
  }
  // 삭제하는 함수
  const onDelete = (id) => {
    setLists(lists.filter(list => id !== list.id));
  }
  // li 클릭시 토글로 색상변경 
  const onToggle = (id) => {
    setLists(lists.map(list => id===list.id ? {...list, active: !list.active} : list));
  }
  return (
    <div className="App">
      <CreateTodo usertext={usertext} onChange={onChange} onCreate={onCreate}/>
      <TodoList lists={lists} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;
