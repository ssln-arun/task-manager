import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('');
  const [priority, setPriority] = useState('Low');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      description,
      responsible,
      priority,
      completed: false,
    };

    axios.post('http://localhost:4000/todos/add', newTodo)
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create a New Task</h2>
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Responsible</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            value={responsible}
            onChange={(e) => setResponsible(e.target.value)}
            placeholder="Enter person responsible"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Priority</label>
          <div className="flex gap-4">
            {['Low', 'Medium', 'High'].map((level) => (
              <label key={level} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priority"
                  value={level}
                  checked={priority === level}
                  onChange={(e) => setPriority(e.target.value)}
                  className="accent-blue-600"
                />
                <span className={
                  level === 'High' ? 'text-red-600' :
                  level === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                }>
                  {level}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-200"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;