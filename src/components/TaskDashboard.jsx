import { useState, useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

const TaskDashboard = ({ username }) => {
    const [tasks, setTasks] = useState([]);
    const [darkMode, setDarkMode] = useDarkMode();
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        try {
          const data = localStorage.getItem('tasks')
          const stored = data ? JSON.parse(data) : [];
          setTasks(Array.isArray(stored) ? stored : []);
        } catch(e) {
          console.error("Failed to parse tasks from localStorage: ", e);
          setTasks([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (task) => {
        setTasks([task, ...tasks]);
    };

    const handleToggleComplete = (id) => {
      setTasks(prev => 
        prev.map(task =>
          task.id == id ? { ...task, completed: !task.completed } : task
        )
      );
    };

    const handleDeleteTask = (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this task?");
      if (confirmDelete) {
        setTasks(prev => prev.filter(task => task.id !== id))
      }
    };

    const getFilteredTasks = () => {
      let filtered = tasks;

      if (filter === 'completed') filtered = filtered.filter(t => t.completed);
      if (filter === 'pending') filtered = filtered.filter(t => !t.completed);

      if (searchTerm.trim()) {
        filtered = filtered.filter(t => 
          t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      return filtered;
    }

  return (
    <div className="min-h-screen bg-gray-100 p-4 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
        Welcome, {username}!
      </h1>
      <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-300 absolute top-10 right-6 dark:bg-gray-700 hover:cursor-pointer mb-4 text-sm px-3 py-1 rounded">{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
      <TaskForm onAdd={handleAddTask} />
      <TaskFilter currentFilter={filter} onChange={setFilter} tasks={tasks} onSearch={setSearchTerm} />
      <TaskList tasks={getFilteredTasks()} onToggle={handleToggleComplete} onDelete={handleDeleteTask} />
    </div>
  );
};

export default TaskDashboard;
