import React from "react";

function Die(props) {
  return (
    <>
      <div className="die">
        <button onClick={props.holdDice} className={`die-value-${props.value} ${props.isHeld === true ? 'die-num is-held' : 'die-num'}`}>
        {[...Array(props.value)].map((value, index) => (
            <div key={index} id={index + 1} className={`dot dot-${index + 1}`}></div>
          ))}
        </button>
      </div>
    </>
  );
}

export default Die;
