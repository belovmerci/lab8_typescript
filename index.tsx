import React from 'react';
import ReactDOM from 'react-dom';
import toDoList from './toDoList.tsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <toDoList />
  </React.StrictMode>,
  document.getElementById('root')
);
