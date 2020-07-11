import React, { memo } from "react";

const LogList = memo(({ logList }) => {
  return (
    <>
      {logList.map((v, i) => {
        return (
          <div className="logList" key={v + i}>
            {v}
          </div>
        );
      })}
    </>
  );
});

export default LogList;
