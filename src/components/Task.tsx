import type { Task } from '../types';

function Task({title}: Task) {
    return <li>{title}</li>
}

export default Task;