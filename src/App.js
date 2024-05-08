import React, { useState } from 'react';

function Square({ n }) {
  return <div>{n * n}</div>;
}

function OnlyEven({ arr }) {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  return <div>{evenNumbers.join(', ')}</div>;
}

function Temperature({ t }) {
  const textStyle = {
    color: t < 0 ? 'blue' : 'red'
  };

  return <div style={textStyle}>{t}</div>;
}

function ToggleButton() {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(color === 'red' ? 'green' : 'red');
  };

  const buttonStyle = {
    backgroundColor: color
  };

  return <button style={buttonStyle} onClick={handleClick}>Нажми меня!</button>;
}

function App() {
  return (
    <div>
      <h1>React Modules</h1>
      
      <h2>Task 1: Square</h2>
      <Square n={3} />
      
      <h2>Task 2: OnlyEven</h2>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
      
      <h2>Task 3: Temperature</h2>
      <Temperature t={451} />
      
      <h2>Task 4: ToggleButton</h2>
      <ToggleButton />
    </div>
  );
}

export default App;
