import React from "react";
import Die from "./components/Die/Die";

function allNewDice() {
  let diceValArray = [];
  for (let i = 0; i < 10; i++) {
    diceValArray.push({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: i,
    });
  }
  return diceValArray;
}

function App() {
  const [arrayOfNumbers, setArrayOfNumbers] = React.useState(allNewDice);
  const dieComponent = arrayOfNumbers.map((num, index) => {
    return (
      <Die
        holdDice={(id) => holdDice(num.id)}
        value={num.value}
        key={num.id}
        isHeld={num.isHeld}
      />
    );
  });

  
  function holdDice(id) {
    setArrayOfNumbers(prevArray => {
      return prevArray.map(prevArrayNum => {
        return prevArrayNum.id === id ? { ...prevArrayNum, isHeld: !prevArrayNum.isHeld } : prevArrayNum;
      });
    });
  }

  function rollDice() {
    setArrayOfNumbers(prevArray => {
      return prevArray.map(prevArrayNum => {
        return prevArrayNum.isHeld === false ? { ...prevArrayNum, value: Math.ceil(Math.random() * 6) } : prevArrayNum;
      });
    });
  }

  return (
    <>
      <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="wrap">
          {dieComponent}
          <button onClick={rollDice} className="roll-btn">
            Roll Dice
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
