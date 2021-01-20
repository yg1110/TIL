import React, { memo } from "react";

const TodoList = memo(
  ({ todoList, todoListRef, updateTodoList, deleteTodoList }) => {
    return (
      <>
        {todoList.map((v, i) => {
          return (
            <div key={v + i} className="todoList">
              <div ref={el => (todoListRef.current[i] = el)}>{v}</div>
              <button onClick={() => updateTodoList(i)}>수정</button>
              <button onClick={() => deleteTodoList(i)}>삭제</button>
            </div>
          );
        })}
      </>
    );
  }
);

export default TodoList;
