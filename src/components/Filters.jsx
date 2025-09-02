export default function Filters({ filters, onChange }) {
  return (
    <div className="flex gap-2 mb-4">
      <select value={filters.priority} onChange={(e) => onChange({ ...filters, priority: e.target.value })} className="border p-2 rounded">
        <option>All</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select value={filters.status} onChange={(e) => onChange({ ...filters, status: e.target.value })} className="border p-2 rounded">
        <option>All</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>
    </div>
  );
}