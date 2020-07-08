import React, { useState, useRef} from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef(null);
  const todoListRef = useRef([]);

  const addTodoList = () => {
    if(todoInput.length === 0){
      return;
    }
    setTodoList(prevState => {
      return [...prevState, todoInput];
    });
    setTodoInput("");
    inputRef.current.focus();
  };

  const onChange = e => {
    setTodoInput(e.target.value);
  };

  const deleteTodoList = i => {
    let deletetodo = [...todoList];
    deletetodo.splice(i, 1);
    setTodoList(deletetodo);
  };

  const updateTodoList = i => {
    const updateTodo = prompt("수정할 값", todoListRef.current[i].innerHTML);
    if(updateTodo === "" || todoListRef.current[i].innerHTML === updateTodo){
      return;
    }
    let newTodoList = [...todoList];
    newTodoList.splice(i, 1, updateTodo);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="inputForm">
        <input
          className="todoInput"
          type="text"
          value={todoInput}
          onChange={onChange}
          ref={inputRef}
        ></input>
        <button onClick={addTodoList}>추가</button>
      </div>
      {todoList.map((v, i) => {
        return (
          <div key={v + i} className="todoList">
            <div ref={el => todoListRef.current[i] = el}>{v}</div>
            <button onClick={() => updateTodoList(i)}>수정</button>
            <button onClick={() => deleteTodoList(i)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
}
 
export default App;