import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
    if (tasks.length == 0) {
        return <p className='text-center text-gray-500 mt-4'>No tasks yet.</p>
    }

    return (
        <div className='mt-4 max-w-xl mx-auto'>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </div>
  );
};

export default TaskList