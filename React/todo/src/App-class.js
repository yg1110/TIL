import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todoList: [],
    todoInput: ""
  }

  addTodoList = (e) => {
    if(this.state.todoInput.length === 0){
      return;
    }
    this.setState({
      todoList: [...this.state.todoList, this.state.todoInput],
      todoInput: ""
    })
    this.inputRef.focus();
  };

  onChange = e => {
    this.setState({todoInput: e.target.value});
  };

  deleteTodoList = i => {
    let deletetodo = [...this.state.todoList];
    deletetodo.splice(i, 1);
    this.setState({todoList: deletetodo});
  };

  onRefInput = (c) => {
    this.inputRef = c;
  }

  todoListRef = [];
  onRefTodoList = (i) => (c) => {
    this.todoListRef[i] = c;
  }

  updateTodoList = i => {
    const updateTodo = prompt("수정할 값", this.todoListRef[i].innerHTML);
    if(updateTodo === "" || this.todoListRef[i].innerHTML === updateTodo){
      return;
    }
    let newTodoList = [...this.state.todoList];
    newTodoList.splice(i, 1, updateTodo);
    this.setState({todoList: newTodoList});
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
    );
  }
}

export default App;
