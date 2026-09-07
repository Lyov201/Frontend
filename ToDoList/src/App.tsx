import { ToDoList } from "./components/ToDoList";
import { ToDoContextProvider } from "./contex/todoContextProvider";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100/80 px-4 py-6 sm:px-6 lg:px-8">
      <ToDoContextProvider>
        <ToDoList />
      </ToDoContextProvider>
    </div>
  );
}