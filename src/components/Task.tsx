import type { TaskType } from '../types';

interface TaskProps extends TaskType {
    onDelete: (id: number) => void;
}

function Task({title, id, onDelete}: TaskProps) {
    return (
        <li className='p-2 bg-white rounded shadow hover:bg-gray-50 flex justify-between items-center'>
            <span className='text-gray-800'>{title}</span>
            <button
                onClick={() => onDelete(id)}
                className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 cursor-pointer'
            >
                Delete
            </button>
        </li>
    )
}

export default Task;