import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDelete }) {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
      {tasks.length === 0 && <p>No tasks found.</p>}
    </div>
  );
}