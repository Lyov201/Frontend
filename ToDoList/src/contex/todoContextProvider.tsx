import { useState, type ReactNode, useEffect } from "react"
import { ToDoContext } from "./todoContext"
import type { ToDo } from "./types"
import axios from "axios"

type Props = {
    children: ReactNode
}



export const ToDoContextProvider: React.FC<Props> = ({ children }) => {

    const [todos, setTodos] = useState<ToDo[]>([])



    const addToDo = (todo: ToDo) => {
        setTodos(prevTodos => [...prevTodos, todo]);
        axios
            .post("http://localhost:3001/todos", todo);
    }

    const removeToDo = (id: number) => {
        setTodos(todos.filter(todo => todo.id != id));
        axios
            .delete(`http://localhost:3001/todos/${id}`)
    }

    const onComplete = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        )
        const task = todos.find(el => el.id === id);
        if(!task) return
        axios
            .patch(`http://localhost:3001/todos/${id}`, { completed: !task.completed })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        axios
            .get("http://localhost:3001/todos")
            .then(res => {
                setTodos(res.data)
            })

    }, [])


    return (
        <ToDoContext.Provider value={{ todos, onRemove: removeToDo, addToDo, onComplete }}>
            {children}
        </ToDoContext.Provider>
    )
}