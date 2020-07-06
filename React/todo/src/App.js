import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef(null);

  const addTodoList = () => {
    const input = document.querySelector(".todoInput");

    setTodoList(prevState => {
      return [...prevState, input.value];
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
    const todoListValue = document.querySelector(".todoList" + i);
    const updateTodo = prompt("수정할 값", todoListValue.innerHTML);
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
          <div key={v + i}>
            <div className={"todoList" + i}>{v}</div>
            <button onClick={() => updateTodoList(i)}>수정</button>
            <button onClick={() => deleteTodoList(i)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
