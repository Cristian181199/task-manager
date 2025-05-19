import { useState } from 'react';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
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
        {tasks.map((task, index) => (
          <Task key={index} title={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;