import { useContext } from "react";
import type { ToDo } from "../contex/types";
import { ToDoContext } from "../contex/todoContext";

type Props = {
    todo: ToDo
}


export const ToDoItem: React.FC<Props> = ({todo}) => {

    const context = useContext(ToDoContext);
    if(!context) throw new Error("Out of context");
    const {onRemove} = context;
    const {onComplete} = context;

    
    return (
        <div className={`flex items-center justify-between gap-3 rounded-xl border p-3.5 transition-all duration-200 sm:p-4 ${todo.completed
            ? "border-emerald-200 bg-emerald-50/80 shadow-sm"
            : "border-slate-200 bg-slate-50/70 shadow-sm"}`}>
            <div className="flex min-w-0 items-center gap-3">
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold ${todo.completed
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-slate-300 bg-white text-slate-300"}`}>
                    {todo.completed ? "✓" : ""}
                </span>

                <h3 className={`truncate text-sm font-medium sm:text-base ${todo.completed ? "text-slate-500 line-through" : "text-slate-800"}`}>
                    {todo.title}
                </h3>
            </div>

            <div className="flex shrink-0 items-center gap-2">
                <button onClick={() => onComplete(todo.id)}
                    key={todo.id}

                    className={`inline-flex items-center justify-center rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1 sm:px-3 sm:text-sm ${todo.completed
                        ? "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                        : "border-emerald-200 bg-emerald-500 text-white hover:bg-emerald-600"}`}>
                    {todo.completed ? "cancel" : 'complete'}
                </button>
                <button
                    type="button"
                    key={todo.id}
                    onClick={() => onRemove(todo.id)}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-1 sm:px-3 sm:text-sm"
                >
                    delete
                </button>
            </div>
        </div>
    )
}