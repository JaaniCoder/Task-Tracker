import React from 'react'

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`p-4 rounded shadow mb-2 bg-white border-l-4 ${task.completed ? 'border-green-500': 'border-yellow-500'} text-black`}>
        <div className='flex justify-between items-start'>
            <div className='flex items-center gap-2 mb-1'>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    task.priority === 'High' ? 'bg-red-500 text-white' :
                    task.priority === 'Medium' ? 'bg-yellow-400 text-black' :
                    'bg-green-400 text-black'
                }`}>{task.priority}</span>
                <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.title}
                </h3>
                {task.description && <p className='text-sm text-gray-600'>{task.description}</p>}
                <p className='text-xs text-gray-500 mt-1'>Created: {new Date(task.createdAt).toLocaleString()}</p>
            </div>
            <div className='flex flex-col gap-2 ml-4'>
                <button onClick={() => {onToggle(task.id)}} className={`text-xs px-2 py-1 rounded hover:cursor-pointer ${task.completed ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-green-500 hover:bg-green-600'} text-white`}>{task.completed ? 'Mark Pending' : 'Mark Done'}</button>
                <button className='text-xs px-2 py-1 bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white rounded' onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    </div>
  );
};

export default TaskItem