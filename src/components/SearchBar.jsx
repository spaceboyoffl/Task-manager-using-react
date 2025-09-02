export default function SearchBar({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search tasks..."
      className="border p-2 rounded w-full mb-4"
    />
  );
}