import React, {
  useState,
  useRef,
  memo,
  useMemo,
  useCallback,
  useReducer,
  useEffect
} from "react";
import "./App.css";
import TodoList from "./TodoList";
import LogList from "./LogList";
import ReducerButton from "./ReducerButton";
function todoCount(todoList) {
  console.log("할일 갯수를 세는중...");
  return todoList.length;
}

export const SET_TODOLIST = "SET_TODOLIST";
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODOLIST:
      const todoListData = [...state.todoList];
      return {
        ...state,
        todoListData,
        todoList: action.todoList
      };
    default:
      return state;
  }
};

const App = memo(() => {
  const [todoList, setTodoList] = useState([]);
  const [logList, setLogList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [state, dispatch] = useReducer(reducer, { todoList: todoList });
  const inputRef = useRef(null);
  const todoListRef = useRef([]);

  useEffect(() => {
    if (state.todoList.length !== 0) {
      setTodoList(prevState => {
        return [...prevState, state.todoList];
      });
    }
  }, [state]);

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
    if (todoInput.length === 0) {
      return;
    }
    setTodoList(prevState => {
      return [...prevState, todoInput];
    });
    setLogList(logList => {
      return [...logList, "ADD " + todoInput];
    }, []);
    setTodoInput("");
    inputRef.current.focus();
  }, [todoInput]);

  const onChange = useCallback(e => {
    setTodoInput(e.target.value);
  }, []);

  const deleteTodoList = useCallback(
    i => {
      let deletetodo = [...todoList];
      setLogList(logList => {
        return [...logList, "DELETE " + todoList[i]];
      });
      deletetodo.splice(i, 1);
      setTodoList(deletetodo);
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
      setTodoList(newTodoList);
      setLogList(logList => {
        return [...logList, "UPDATE " + oldTodo + " -> " + updateTodo];
      });
    },
    [todoList]
  );

  const saveTodoList = e => {
    console.log(e.target);
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
      <div className="content">
        <div className="todo">
          <TodoList
            todoList={todoList}
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
        <button onClick={saveTodoList}>현재내용 저장하기</button>
      </div>
      <div className="content">
        <div>할 일의 수 : {count}</div>
      </div>
      <div className="content">
        <ReducerButton dispatch={dispatch} />
      </div>
      {state.todoList}
    </div>
  );
});

export default App;
