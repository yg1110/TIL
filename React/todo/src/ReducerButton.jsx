import React, { memo } from "react";
import { SET_TODOLIST } from "./App-hooks";

const ReducerButton = memo(({ dispatch }) => {
  const reducerClick = () => {
    console.log("dd");
    dispatch({ type: SET_TODOLIST, todoList: "ddd" });
  };
  return (
    <>
      <button onClick={reducerClick}>dd</button>
    </>
  );
});

export default ReducerButton;
