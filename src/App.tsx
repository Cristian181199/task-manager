import Task from './components/Task';

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <ul>
        <Task title="Comprar comida" />
        <Task title="Estudiar Matematicas" />
      </ul>
    </div>
  );
}

export default App;