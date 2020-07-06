import React from "react";
import "./App.css";

function App() {
  const state = {
    todoList: ["abc", "22"]
  };
  function addTodoList(e) {
    const input = document.querySelector(".todoInput");

    // console.log(state.todoList);
    // state.todoList.push(input.value);
    this.state.setState(prevState => {
      return {
        todoList: [...prevState.todoList, prevState.todoList.push(input.value)]
      };
    });
    console.log(input.value);
    console.log(state.todoList);
  }
  return (
    <div className="App">
      <div className="inputForm">
        <input className="todoInput" type="text"></input>
        <button onClick={addTodoList}>추가</button>
      </div>
      {state.todoList.map((v, i) => (
        <div key={v + i}>{v}</div>
      ))}
    </div>
  );
}

export default App;
