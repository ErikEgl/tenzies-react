import React from "react";
import Die from "./components/Die/Die";

import Confetti from 'react-confetti'

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
  const [tenzies, setTenzies] = React.useState(false);
  const [arrayOfNumbers, setArrayOfNumbers] = React.useState(allNewDice);

  React.useEffect(() => {
      const allHeld = arrayOfNumbers.every(die => die.isHeld)
      const firstValue = arrayOfNumbers[0].value
      const allSameValue = arrayOfNumbers.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
          setTenzies(true)
      }

  }, [arrayOfNumbers]);


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
  function resetGame() {
    setArrayOfNumbers(allNewDice)
    setTenzies(false)
  }

  return (
    <>
    {tenzies &&  <Confetti/>}
      <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="wrap">
          {dieComponent}
          <button onClick={tenzies ? resetGame : rollDice} className="roll-btn">
          {tenzies ? "New game!" : "Roll Dice"}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
