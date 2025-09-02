export default function Pagination({ currentPage, totalPages, onChange }) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      <button disabled={currentPage === 1} onClick={() => onChange(currentPage - 1)} className="px-3 py-1 border rounded">
        Prev
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button disabled={currentPage === totalPages} onClick={() => onChange(currentPage + 1)} className="px-3 py-1 border rounded">
        Next
      </button>
    </div>
  );
}