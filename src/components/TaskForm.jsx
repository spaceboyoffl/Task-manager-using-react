import { useState } from 'react';

export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ id: Date.now(), title, priority, status });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="border p-2 rounded w-full"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border p-2 rounded">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded">
        <option>Pending</option>
        <option>Completed</option>
      </select>
      <button className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
  );
}