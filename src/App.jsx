import { useState, useMemo } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Pagination from "./components/Pagination";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";
import ProgressSummary from "./components/ProgressSummary";

const PAGE_SIZE = 5;

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ priority: "All", status: "All" });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesPriority = filters.priority === "All" || task.priority === filters.priority;
      const matchesStatus = filters.status === "All" || task.status === filters.status;
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPriority && matchesStatus && matchesSearch;
    });
  }, [tasks, filters, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredTasks.length / PAGE_SIZE));
  const paginatedTasks = filteredTasks.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const addTask = (task) => setTasks(prev => [...prev, task]);
  const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm onCreate={addTask} />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <Filters filters={filters} onChange={setFilters} />
      <ProgressSummary total={tasks.length} completed={tasks.filter(t => t.status === "Completed").length} />
      <TaskList tasks={paginatedTasks} onDelete={deleteTask} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
    </div>
  );
}