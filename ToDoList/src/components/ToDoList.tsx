import { AddToDo } from "./AddToDo";
import { FilterToDo } from "./FilterToDo";
import { List } from "./List";

export function ToDoList() {
    return(
        <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] ring-1 ring-slate-100 backdrop-blur-sm">
                <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-4 sm:px-6">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Tasks</p>
                            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Todo List</h1>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:p-6">
                    <AddToDo />
                    <FilterToDo />
                    <List />
                </div>
            </div>
        </div>
    )
}