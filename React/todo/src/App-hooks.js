import React, { useState, useRef, useEffect} from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [logList, setLogList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef(null);
  const todoListRef = useRef([]);

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    const logList = JSON.parse(localStorage.getItem("logList"));

    if(todoList !== null){
      setTodoList(todoList);
    }
    
    if(logList !== null){
      setLogList(logList);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("logList", JSON.stringify(logList));
  },[todoList, logList])

  const addTodoList = () => {
    if(todoInput.length === 0){
      return;
    }
    setTodoList(prevState => {
      return [...prevState, todoInput];
    });
    setLogList(logList => {
      return [...logList, "ADD " + todoInput];
    })
    setTodoInput("");
    inputRef.current.focus();
  };

  const onChange = e => {
    setTodoInput(e.target.value);
  };

  const deleteTodoList = i => {
    let deletetodo = [...todoList];
    setLogList(logList => {
      return [...logList, "DELETE " + todoList[i]];
    })
    deletetodo.splice(i, 1);
    setTodoList(deletetodo);
  };

  const updateTodoList = i => {
    const oldTodo = todoList[i];
    const updateTodo = prompt("수정할 값", todoListRef.current[i].innerHTML);
    if(updateTodo === "" || todoListRef.current[i].innerHTML === updateTodo){
      return;
    }
    let newTodoList = [...todoList];
    newTodoList.splice(i, 1, updateTodo);
    setTodoList(newTodoList);
    setLogList(logList => {
      return [...logList, "UPDATE " + oldTodo + " -> " + updateTodo];
    });
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
      <div className="listContent">
        <div className="todo">
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
        <div className="log">
          {logList.map((v, i) => {
            return (
              <div className="logList" key={v + i}>
                {v}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
 
export default App;