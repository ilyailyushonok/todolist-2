import {EditableSpan} from './EditableSpan.tsx';


type  todolistTitlePropsType={
    title: string,
    editTodolistTitle:(title:string)=>void
    deleteTodolist:()=>void
}

export const TodolistTitle = ({deleteTodolist,title,editTodolistTitle}:todolistTitlePropsType) => {
    return (
        <div>
        <EditableSpan title={title} editTitle={editTodolistTitle}/>
        <button onClick={deleteTodolist}>x</button>
        </div>
    );
};

