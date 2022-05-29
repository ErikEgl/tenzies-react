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

  function clickHandler() {
    return setArrayOfNumbers(allNewDice);
  }

  return (
    <>
      <main>
        <div className="wrap">
          {dieComponent}
          <button onClick={clickHandler} className="roll-btn">
            Roll Dice
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
