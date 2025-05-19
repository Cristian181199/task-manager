import { useState } from 'react';
import Task from './components/Task';
import type { TaskType } from './types';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask }]);
      setNewTask('');
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold text-center mb-4'>Task Manager</h1>
      <div className='flex gap-2 mb-4'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className='flex-1 p-2 border-gray-300 border rounded'
        />
        <button
          onClick={addTask}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer'
        >
          Add Task
        </button>
      </div>
      <h2 className='text-xl font-bold text-center'>Tasks</h2>
      <ul className='space-y-2'>
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </ul>
    </div>
  );
}

export default App;