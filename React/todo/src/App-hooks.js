import React, { useRef, memo, useMemo, useCallback, useReducer } from "react";
import "./App.css";
import TodoList from "./TodoList";
import LogList from "./LogList";
import CcontextAPITest from "./CcontextAPITest";
function todoCount(todoList) {
  console.log("할일 갯수를 세는중...");
  return todoList.length;
}

export const CHANGE_VALUE = "CHANGE_VALUE";
export const CLEAR_VALUE = "CLEAR_VALUE";
export const ADD_TODOLIST = "ADD_TODOLIST";
export const DELETE_TODOLIST = "DELETE_TODOLIST";
export const UPDATE_TODOLIST = "UPDATE_TODOLIST";
export const ADD_LOGLIST = "ADD_LOGLIST";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        todoInput: action.value
      };
    }
    case CLEAR_VALUE: {
      return {
        ...state,
        todoInput: ""
      };
    }
    case ADD_TODOLIST: {
      return {
        ...state,
        todoList: [...state.todoList, action.todo]
      };
    }
    case DELETE_TODOLIST: {
      return {
        ...state,
        todoList: state.todoList.filter((v, i) => i !== action.i)
      };
    }
    case UPDATE_TODOLIST: {
      return {
        ...state,
        todoList: action.newTodoList
      };
    }
    case ADD_LOGLIST: {
      return {
        ...state,
        logList: [...state.logList, action.value]
      };
    }

    default:
      return state;
  }
};

const initialState = {
  todoList: [],
  logList: [],
  todoInput: ""
};

export const TodoDispatch = React.createContext(null);

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todoList, logList, todoInput } = state;
  const inputRef = useRef(null);
  const todoListRef = useRef([]);

  // useEffect(() => {
  //   const todoList = JSON.parse(localStorage.getItem("todoList"));
  //   const logList = JSON.parse(localStorage.getItem("logList"));

  //   if (todoList !== null) {
  //     setTodoList(todoList);
  //   }

  //   if (logList !== null) {
  //     setLogList(logList);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todoList", JSON.stringify(todoList));
  //   localStorage.setItem("logList", JSON.stringify(logList));
  // }, [todoList, logList]);

  const count = useMemo(() => todoCount(todoList), [todoList]);

  const addTodoList = useCallback(() => {
    console.log(todoInput);
    if (todoInput.length === 0) {
      return;
    }
    dispatch({ type: ADD_TODOLIST, todo: todoInput });
    dispatch({ type: ADD_LOGLIST, value: "ADD " + todoInput });
    dispatch({ type: CLEAR_VALUE });

    inputRef.current.focus();
  }, [todoInput]);

  const onChange = useCallback(e => {
    dispatch({ type: CHANGE_VALUE, value: e.target.value });
  }, []);

  const deleteTodoList = useCallback(
    i => {
      dispatch({ type: ADD_LOGLIST, value: "DELETE " + todoList[i] });
      dispatch({ type: DELETE_TODOLIST, i: i });
    },
    [todoList]
  );

  const updateTodoList = useCallback(
    i => {
      const oldTodo = todoList[i];
      const updateTodo = prompt("수정할 값", todoListRef.current[i].innerHTML);
      if (
        updateTodo === "" ||
        todoListRef.current[i].innerHTML === updateTodo
      ) {
        return;
      }
      let newTodoList = [...todoList];
      newTodoList.splice(i, 1, updateTodo);
      dispatch({ type: UPDATE_TODOLIST, newTodoList: newTodoList });
      dispatch({
        type: ADD_LOGLIST,
        value: "UPDATE " + oldTodo + " -> " + updateTodo
      });
    },
    [todoList]
  );

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
      <div className="content">
        <div className="todo">
          <TodoList
            todoList={state.todoList}
            todoListRef={todoListRef}
            updateTodoList={updateTodoList}
            deleteTodoList={deleteTodoList}
          />
        </div>
        <div className="log">
          <LogList logList={logList} />
        </div>
      </div>
      <div className="content">
        <div>할 일의 수 : {count}</div>
      </div>
      <div className="content">
        <TodoDispatch.Provider value={dispatch}>
          <CcontextAPITest />
        </TodoDispatch.Provider>
      </div>
      {state.todoList}
    </div>
  );
});

export default App;
