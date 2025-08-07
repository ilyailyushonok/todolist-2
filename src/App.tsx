import {TodoListItem} from "./components/TodoListItem.tsx";
import {useState} from "react";
import {v1} from "uuid";
import {AddNewTodolist} from "./components/AddNewTodolist.tsx";

export type tasksType = {
    id: string
    isDone: boolean
    text: string
}

type todolistType = {
    id: string
    title: string
    filter: string
}
//12
type tasksStateType = { [todolistId: string]: tasksType[] }

export type filteredtasksType = "all" | "active" | "completed"

function App() {
    const todolistId_1 = v1()
    const [todolists, setTodolists] = useState<todolistType[]>([
            {id: todolistId_1, title: "newTodo", filter: "all"}
        ]
    )
    const addNewTodolist = (title: string, id: string = v1()) => {
        console.log(title)
        const newTodolist = {id, title, filter: "all"}
        setTodolists([...todolists, newTodolist])
        setTasks({...tasks, [id]: []})
    }
    const deleteTodolist=(todolistId:string)=>{
        const  deleteTodo=todolists.filter(el=>el.id!==todolistId)
        setTodolists(deleteTodo)
        delete tasks[todolistId]
    }

    const inicialTaskState: tasksStateType = {
        [todolistId_1]: [
            {id: v1(), isDone: false, text: "myTask"},
            {id: v1(), isDone: false, text: "myTask2"}
        ]
    }
    const [tasks, setTasks] = useState<tasksStateType>(inicialTaskState);
    const addNewTask = (text: string, todolistId: string) => {
        const newTask = {id: v1(), isDone: false, text}
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }
    const deleteTask = (id: string, todolistId: string) => {
        const newTasks = tasks[todolistId].filter(task => task.id !== id)
        setTasks({...tasks, [todolistId]: newTasks});
    }
    const editTaskIsDone = (taskId: string, todolistId: string) => {
        const toggleIsDone = tasks[todolistId].map(task => {
            if (task.id === taskId) task.isDone = !task.isDone
            return task;
        })
        setTasks({...tasks, [todolistId]: toggleIsDone})
    }
    const editTaskTitle = (taskId: string, todolistId: string, title: string) => {
        const editTitle = tasks[todolistId].map(task => {
            if (task.id === taskId) task.text = title
            return task;
        })
        setTasks({...tasks, [todolistId]: editTitle})
    }
    const editTodolistTitle = (title: string, todolistId: string) => {
        const editTitle = todolists.map(el => {
            if (el.id === todolistId) el.title = title
            return el
        })
        setTodolists(editTitle)
    }

    const changeFilteredStatus = (filtered: filteredtasksType, todolistId: string) => {
        const changeStatus = todolists.map(el => {
                if (el.id === todolistId) el.filter = filtered
                return el
            }
        )
        setTodolists(changeStatus)
    }
    const todoListsComponents = todolists.map((el) => {
        console.log("todoListsComponents")
        let filteredTasks: tasksType[] = tasks[el.id]

        if (el.filter === "completed") {
            filteredTasks = tasks[el.id].filter(task => task.isDone);

        }
        if (el.filter === "active") {
            filteredTasks = tasks[el.id].filter(task => !task.isDone);
        }

        return <TodoListItem
            todolistTitle={el.title}
            deleteTodolist={()=>deleteTodolist(el.id)}
            editTodolistTitle={(title:string,)=>editTodolistTitle(title,el.id)}
            key={el.id}
            tasks={filteredTasks}
            addNewTask={(title: string) => addNewTask(title, el.id)}
            deleteTask={(id: string) => deleteTask(id, el.id)}
            changeFilteredStatus={(filtered: filteredtasksType) => changeFilteredStatus(filtered, el.id)}
            editTaskIsDone={(taskId) => editTaskIsDone(taskId, el.id)}
            editTaskTitle={(taskId: string, title: string) => editTaskTitle(taskId, el.id, title)}
        />

    })

    return (
        <>
            <AddNewTodolist addNewTodolist={addNewTodolist}/>
            {todoListsComponents}
        </>
    )
}

export default App
