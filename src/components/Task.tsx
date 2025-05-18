interface TaskProps {
    title: string;
}

function Task({title}: TaskProps) {
    return <li>{title}</li>
}

export default Task;