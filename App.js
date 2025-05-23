import './App.css';

import React, { useEffect, useState } from 'react';
import Compo1 from './Compo1';
import { fetchTodos,addTodo,deleteTodo,summarizeTodos } from './compo2';
function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  const loadTodos = async () => {
    try {
      const res = await fetchTodos();
      setTodos(res.data);
    } catch (err) {
      console.error('Error fetching todos', err);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (todo) => {
    try {
      await addTodo(todo);
      loadTodos();
    } catch (err) {
      console.error('Error adding todo', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      loadTodos();
    } catch (err) {
      console.error('Error deleting todo', err);
    }
  };

  const handleSummarize = async () => {
    try {
      const res = await summarizeTodos();
      setMessage('Summary sent to Slack!');
    } catch (err) {
      console.error('Error summarizing', err);
      setMessage('Failed to send summary to Slack.');
    }

    setTimeout(() => setMessage(''), 4000);
  };
  return (
    <div className="App">
       <h1>Todo Summary Assistant</h1>
      <Compo1 onAdd={handleAdd} />
      <compo2 todos={todos} onDelete={handleDelete} />
      <button onClick={handleSummarize}>Summarize & Send to Slack</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
