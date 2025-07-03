import React from 'react'

const TaskFilter = ({ currentFilter, onChange, tasks, onSearch }) => {
    const countAll = tasks.length;
    const countCompleted = tasks.filter(t => t.completed).length;
    const countPending = tasks.filter(t => !t.completed).length;

    return (
        <div className='flex flex-col items-center md:flex-row justify-center gap-4 mt-4'>
            <div className='flex justify-center gap-4 mt-4'>
            <button className={`px-4 py-2 rounded hover:cursor-pointer ${currentFilter === 'all' ? 'bg-blue-600 text-white': 'bg-gray-200'}`} onClick={() => onChange('all')}>All ({countAll})</button>
            <button className={`px-4 py-2 rounded hover:cursor-pointer ${currentFilter === 'completed' ? 'bg-blue-600 text-white': 'bg-gray-200'}`} onClick={() => onChange('completed')}>Completed ({countCompleted})</button>
            <button className={`px-4 py-2 rounded hover:cursor-pointer ${currentFilter === 'pending' ? 'bg-blue-600 text-white': 'bg-gray-200'}`} onClick={() => onChange('pending')}>Pending ({countPending})</button>
            <input type="text" placeholder='Search tasks...' onChange={(e) => onSearch(e.target.value)} className='border p-2 rounded w-60 text-black dark:text-gray-300' />
        </div>
        </div>
  );
};

export default TaskFilter;