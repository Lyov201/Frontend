import { useForm } from "react-hook-form"
import type { ToDo } from "../contex/types"
import { useContext } from "react"
import { ToDoContext } from "../contex/todoContext"

type ToDoDetails = Omit<ToDo, "id" | "completed">
export function AddToDo() {
    const {register, handleSubmit, formState: {errors},reset} = useForm<ToDoDetails>()
    const context = useContext(ToDoContext);
    if(!context) throw new Error("Out of context");
    const {addToDo} = context
    const onSubmit = (data:ToDo) => {
        addToDo(data)
        reset();
    }
    return(
        <div className="mb-5">
            <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 shadow-sm sm:flex-row sm:items-center sm:gap-3 sm:p-4">
                <label className="sr-only" htmlFor="new-todo-title">
                    New Todo
                </label>

                <input
                    id="new-todo-title"
                    type="text"
                    {...register("title", {required: "Please fill the title"})}
                    placeholder="Add a new todo..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm transition-all duration-200 focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100 sm:text-base"
                    />
                    {errors.title && <p className="text-red-400">{errors.title.message} </p>}

                <button
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 sm:min-w-[132px]"
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}