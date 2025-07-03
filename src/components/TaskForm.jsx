import { use, useState } from "react";

const TaskForm = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            completed: false,
            priority,
            createdAt: new Date().toISOString()
        };

        onAdd(newTask);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full text-center max-w-xl bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-semibold mb-2 dark:text-gray-600">Add New Task</h2>
            <input type="text" placeholder="Title (required)" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full text-black p-2 border border-gray-300 rounded mb-2" required />
            <textarea placeholder="Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full text-black p-2 border border-gray-300 rounded mb-2" rows="3" />
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full p-2 border dark:text-gray-400 text-black border-gray-300 rounded mb-2">
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
            </select>
            <button type="submit" className="bg-blue-500 hover:cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600">Add Task</button>
        </form>
    );
};

export default TaskForm;