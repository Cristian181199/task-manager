import type { TaskType } from '../types';

function Task({title}: TaskType) {
    return <li>{title}</li>
}

export default Task;