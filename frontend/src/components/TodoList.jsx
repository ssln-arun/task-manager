import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = ({ todo, markCompleted, deleteTodo }) => {
  const isCompleted = todo.completed;

  return (
    <tr className="hover:bg-gray-50 text-base">
      <td className={`px-5 py-4 ${isCompleted ? 'line-through text-gray-400' : 'text-gray-800'}`}>
        {todo.description}
      </td>
      <td className={`px-5 py-4 ${isCompleted ? 'text-gray-400' : 'text-gray-800'}`}>
        {todo.responsible}
      </td>
      <td className="px-5 py-4">
        <span
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full shadow-sm ${
            todo.priority === 'High'
              ? 'bg-red-500 text-white'
              : todo.priority === 'Medium'
              ? 'bg-yellow-500 text-white'
              : 'bg-green-500 text-white'
          }`}
        >
          {todo.priority}
        </span>
      </td>
      <td className="px-5 py-4 flex gap-3">
        <button
          onClick={() => markCompleted(todo._id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow transition-all duration-200 hover:scale-105 ${
            isCompleted
              ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
        >
          {isCompleted ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 9l2 2 4-4M7 17h10" />
              </svg>
              Undo
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Complete
            </>
          )}
        </button>

        <button
          onClick={() => deleteTodo(todo._id)}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 shadow transition-all duration-200 hover:scale-105"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Delete
        </button>
      </td>

    </tr>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios
      .get('http://localhost:4000/todos')
      .then((response) => setTodos(response.data))
      .catch((err) => console.error(err));
  };

  const markCompleted = (id) => {
    axios
      .post(`http://localhost:4000/todos/complete/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.error(err));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:4000/todos/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Tasks</h1>
      </div>

      <div className="overflow-x-auto bg-white shadow-xl rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-600 text-white text-md">
            <tr>
              <th className="px-5 py-4 text-left font-semibold uppercase tracking-wide">Description</th>
              <th className="px-5 py-4 text-left font-semibold uppercase tracking-wide">Responsible</th>
              <th className="px-5 py-4 text-left font-semibold uppercase tracking-wide">Priority</th>
              <th className="px-5 py-4 text-left font-semibold uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {todos.map((todo) => (
              <Todo
                key={todo._id}
                todo={todo}
                markCompleted={markCompleted}
                deleteTodo={deleteTodo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;