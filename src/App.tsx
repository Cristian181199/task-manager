import { useState } from 'react';
import Task from './components/Task';
import type { Task as TaskType } from './types';

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
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </ul>
    </div>
  );
}

export default App;