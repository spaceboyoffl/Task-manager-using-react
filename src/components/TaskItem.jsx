export default function TaskItem({ task, onDelete }) {
  return (
    <div className="border p-2 rounded flex justify-between">
      <div>
        <p className="font-semibold">{task.title}</p>
        <p className="text-sm text-gray-500">{task.priority} | {task.status}</p>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
    </div>
  );
}