import {TodolistTitle} from './TodolistTitle.tsx';
import {ItemInput} from './ItemInput.tsx';
import {ListItem} from './ListItem.tsx';
import {ButtonsFiltered} from './ButtonsFiltered.tsx';
import {filteredtasksType, tasksType} from '../App.tsx';

type TodoListItemPropsType={
    tasks: tasksType[]
    addNewTask:(text:string) => void
    deleteTask:(id:string) => void
    changeFilteredStatus:(filtered:filteredtasksType) => void
    editTaskIsDone:(taskId:string) => void
    editTaskTitle:(taskId:string,title:string) => void
    todolistTitle:string
    editTodolistTitle:(title:string)=>void
    deleteTodolist:()=>void
}

export const TodoListItem = ({deleteTodolist,editTodolistTitle,todolistTitle,editTaskTitle,editTaskIsDone,changeFilteredStatus,deleteTask,tasks,addNewTask}:TodoListItemPropsType) => {


    return (
        <div>
            <TodolistTitle title={todolistTitle} editTodolistTitle={editTodolistTitle} deleteTodolist={deleteTodolist}/>
            <ItemInput callback={addNewTask}/>
            <ListItem tasks={tasks} deleteTask={deleteTask} editTaskIsDone={editTaskIsDone} editTaskTitle={editTaskTitle}/>
            <ButtonsFiltered changeFilteredStatus={changeFilteredStatus}/>
        </div>
    );
};

