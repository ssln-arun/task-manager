import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#F7F9FC] text-[#2E2E2E] font-sans">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center text-2xl font-bold text-[#6C63FF]">
                  Task Manager
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-700 hover:text-[#6C63FF]">
                  Home
                </Link>
                <Link
                  to="/create"
                  className="bg-[#6C63FF] text-white px-4 py-2 rounded-md hover:bg-[#5753c9]"
                >
                  Add Task
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/create" element={<CreateTodo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;