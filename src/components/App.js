import React, { useState } from 'react';

const Square = ({ n }) => {
  const result = n * n;
  return (
    <div>
      {`// ${result}`}
    </div>
  );
};

const OnlyEven = ({ arr }) => {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  return (
    <div>
      {`// ${evenNumbers.join(', ')}`}
    </div>
  );
};

const Temperature = ({ t }) => {
  const [color, setColor] = useState(t < 0 ? 'blue' : 'red');

  const handleButtonClick = () => {
    setColor(color === 'red' ? 'green' : 'red');
  };

  return (
    <div>
      <span style={{ color }}>{t}</span>
      <button onClick={handleButtonClick}>Нажми меня!</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Square n={3} />
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
      <Temperature t={451} />
    </div>
  );
};

export default App;
