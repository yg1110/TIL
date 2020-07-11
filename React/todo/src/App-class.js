import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentCleanup = this.componentCleanup.bind(this);
  }

  state = {
    todoInput: "",
    todoList: [],
    logList: []
  };

  componentCleanup() {
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
    localStorage.setItem("logList", JSON.stringify(this.state.logList));
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.componentCleanup);
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    const logList = JSON.parse(localStorage.getItem("logList"));

    if (todoList !== null) {
      this.setState({
        todoList: todoList
      });
    }

    if (logList !== null) {
      this.setState({
        logList: logList
      });
    }
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener("beforeunload", this.componentCleanup);
  }

  addTodoList = e => {
    if (this.state.todoInput.length === 0) {
      return;
    }
    this.setState({
      todoList: [...this.state.todoList, this.state.todoInput],
      logList: [...this.state.logList, "ADD " + this.state.todoInput],
      todoInput: ""
    });
    this.inputRef.focus();
  };

  onChange = e => {
    this.setState({ todoInput: e.target.value });
  };

  deleteTodoList = i => {
    let deletetodo = [...this.state.todoList];
    const del = deletetodo.splice(i, 1);
    this.setState({
      todoList: deletetodo,
      logList: [...this.state.logList, "DELETE " + del]
    });
  };

  onRefInput = c => {
    this.inputRef = c;
  };

  todoListRef = [];
  onRefTodoList = i => c => {
    this.todoListRef[i] = c;
  };

  updateTodoList = i => {
    const oldTodo = this.state.todoList[i];
    const updateTodo = prompt("수정할 값", this.todoListRef[i].innerHTML);
    if (updateTodo === "" || this.todoListRef[i].innerHTML === updateTodo) {
      return;
    }
    let newTodoList = [...this.state.todoList];
    newTodoList.splice(i, 1, updateTodo);
    this.setState({
      todoList: newTodoList,
      logList: [
        ...this.state.logList,
        "UPDATE " + oldTodo + " -> " + updateTodo
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="inputForm">
          <input
            className="todoInput"
            type="text"
            value={this.state.todoInput}
            onChange={this.onChange}
            ref={this.onRefInput}
          ></input>
          <button onClick={this.addTodoList}>추가</button>
        </div>
        <div className="listContent">
          <div className="todo">
            {this.state.todoList.map((v, i) => {
              return (
                <div key={v + i} className="todoList">
                  <div ref={this.onRefTodoList(i)}>{v}</div>
                  <button onClick={() => this.updateTodoList(i)}>수정</button>
                  <button onClick={() => this.deleteTodoList(i)}>삭제</button>
                </div>
              );
            })}
          </div>
          <div className="log">
            {this.state.logList.map((v, i) => {
              return (
                <div className="logList" key={v + i}>
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
