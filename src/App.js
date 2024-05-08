import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

// Задача 1: Обратный таймер
const ReverseTimer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) clearInterval(interval);

    return () => clearInterval(interval);
  }, [count]);

  return <div>Обратный таймер: {count}</div>;
};

// Задача 2: Бесконечный таймер
const InfiniteTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <div>Бесконечный таймер: {count}</div>
      <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Пауза' : 'Старт'}</button>
    </div>
  );
};

// Задача 3: Простые числа
const PrimeNumbers = () => {
  const [primes, setPrimes] = useState([2]);
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let nextPrime = primes[primes.length - 1] + 1;
      while (!isPrime(nextPrime)) {
        nextPrime++;
      }
      setPrimes((prevPrimes) => [...prevPrimes, nextPrime]);
    }, 1000);

    return () => clearInterval(interval);
  }, [primes]);

  return <div>Простые числа: {primes.join(', ')}</div>;
};

// Задача 4: Светофор
const TrafficLight = () => {
  const [activeLightIndex, setActiveLightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLightIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light">
      <div className={`light red ${activeLightIndex === 0 ? 'active' : ''}`}></div>
      <div className={`light yellow ${activeLightIndex === 1 ? 'active' : ''}`}></div>
      <div className={`light green ${activeLightIndex === 2 ? 'active' : ''}`}></div>
    </div>
  );
};


// Задача 5: Перевёрнутая строка
const RevertString = ({ s }) => {
  const [revertedString, setRevertedString] = useState(s);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevertedString((prevString) => prevString.slice(-1) + prevString.slice(0, -1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{revertedString}</div>;
};

function App() {
  return (
    <div>
      <h1>React модули</h1>
      
      <h2>Задача 1: Обратный таймер</h2>
      <ReverseTimer />
      
      <h2>Задача 2: Бесконечный таймер</h2>
      <InfiniteTimer />
      
      <h2>Задача 3: Простые числа </h2>
      <PrimeNumbers />
      
      <h2>Задача 4: Светофор</h2>
      <TrafficLight />

      <h2>Задача 5: Оборачиваемая строка</h2>
      <RevertString s="привет!" />
    </div>
  );
}

export default App;
