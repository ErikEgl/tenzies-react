import React from "react";

function Die(props) {
  return (
    <>
      <div className="die">
        <button onClick={props.holdDice} className={props.isHeld === true ? 'die-num is-held' : 'die-num'}>{props.value}</button>
      </div>
    </>
  );
}

export default Die;
