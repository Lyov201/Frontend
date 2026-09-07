export type ToDo = {
    id: number
    title: string
    completed: boolean
}

export type ContextType = {
    todos: ToDo[],
    onRemove: (id:number) => void
    addToDo:(todo:ToDo) => void
    onComplete:(id: number) => void
}
