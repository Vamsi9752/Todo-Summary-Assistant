import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080'; 

export const fetchTodos = () => axios.get(`${API_URL}/todos`);
export const addTodo = (todo) => axios.post(`${API_URL}/todos`, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/todos/${id}`);
export const summarizeTodos = () => axios.post(`${API_URL}/summarize`);

const compo2 = ({ todos, onDelete }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        {todo.title}
        <button onClick={() => onDelete(todo.id)}>❌</button>
      </li>
    ))}
  </ul>
);

export default compo2;
