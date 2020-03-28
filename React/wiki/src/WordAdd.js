import React from "react";

const WordAdd = ({ value, ChangeHandler, ClickHandler }) => {
  return (
    <form className="field has-addons">
      <div className="control is-expanded">
        <input className="input" value={value} onChange={ChangeHandler}></input>
      </div>
      <div className="control">
        <button className="button is-primary" onClick={ClickHandler}>
          저장
        </button>
      </div>
    </form>
  );
};

export default WordAdd;
