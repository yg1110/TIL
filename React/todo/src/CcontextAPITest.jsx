import React, { memo, useContext } from "react";
import { TodoDispatch } from "./App-hooks";
import { ADD_LOGLIST } from "./App-hooks";

const CcontextAPITest = memo(() => {
  const dispatch = useContext(TodoDispatch);

  const onDispatchSubmit = () => {
    console.log("click");
    dispatch({ type: ADD_LOGLIST, value: "ContextAPI TEST" });
  };
  return (
    <>
      <button onClick={onDispatchSubmit}>ContextAPI TEST</button>
    </>
  );
});

export default CcontextAPITest;
