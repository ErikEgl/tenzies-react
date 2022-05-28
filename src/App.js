import React from "react";
import Die from "./components/Die/Die";


function allNewDice() {
  let diceValArray = [];
  for (let i = 0; i < 10; i++) {
    diceValArray.push(Math.ceil(Math.random() * 6));
  }
  return diceValArray;
}

function App() {
  const [arrayOfNumbers, setArrayOfNumbers] = React.useState(allNewDice)
  const dieComponent = arrayOfNumbers.map((num, index) => {
    return  <Die value={num} key={index}/>
  })
  return (
    <>
      <main>
        {dieComponent}
      </main>
    </>
  );
}

export default App;
