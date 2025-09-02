export default function ProgressSummary({ total, completed }) {
  return (
    <p className="mb-4">Completed {completed} of {total} tasks</p>
  );
}