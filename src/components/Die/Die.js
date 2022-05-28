import React from "react";

function Die(props) {
  return (
    <>
      <div className="die">
        <button className="die-num">{props.value}</button>
      </div>
    </>
  );
}

export default Die;
