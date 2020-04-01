import React from "../node_modules/@types/react";

const WordDisplay = ({ dictionary, deleteHandler }) => {
  const WordDisplay = dictionary.map(word => {
    return (
      <div key={word.id} className="box">
        <div className="level">
          <div className="level-left">
            <p className="title">{word.todo}</p>
          </div>
          <div className="level-right ">
            <button
              className="button is-danger"
              onClick={() => deleteHandler(word.id)}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    );
  });
  return WordDisplay;
};

export default WordDisplay;
