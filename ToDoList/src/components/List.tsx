import { useContext } from "react"
import { ToDoContext } from "../contex/todoContext"
import { ToDoItem } from "./ToDoItem";

export function List() {

    const context = useContext(ToDoContext);
    if(!context) throw new Error("Out of provider");

    const {todos} = context

    return(
        <div className="mt-4 space-y-3">
            { todos.map(todo => 
                <ToDoItem 
                    todo={todo}
                    key={todo.id}
                /> 
            )}
        </div>
    )
}