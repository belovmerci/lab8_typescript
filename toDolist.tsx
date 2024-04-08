import React, { useState } from 'react';
import './toDoList.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;
}

const toDoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() === '') return;

    const newTask: Task = {
      id: Date.now(),
      text: taskInput,
      completed: false,
      deleted: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const completeTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, deleted: true } : task
    ));
  };

  const filteredTasks = tasks.filter(task => !task.deleted);

  return (
    <div className="container">
      <h1>Список дел</h1>

      <div className="taskInput">
        <input
          type="text"
          value={taskInput}
          onChange={e => setTaskInput(e.target.value)}
          placeholder="Введите задачу"
        />
        <div>
          <button onClick={addTask}>Добавить</button>
          <button onClick={() => setTaskInput('')}>Очистить всё</button>
        </div>
      </div>

      <div id="filterButtons">
        <button onClick={() => setTasks(filteredTasks)}>Все</button>
        <button onClick={() => setTasks(filteredTasks.filter(task => !task.completed))}>Активные</button>
        <button onClick={() => setTasks(filteredTasks.filter(task => task.completed))}>Завершенные</button>
      </div>

      <div id="taskList">
        {filteredTasks.map(task => (
          <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <span>{task.text}</span>
            <div>
              <button onClick={() => completeTask(task.id)}>✓</button>
              <button onClick={() => deleteTask(task.id)}>✗</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default toDoList;
