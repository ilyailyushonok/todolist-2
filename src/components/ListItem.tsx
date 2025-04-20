import {tasksType} from '../App.tsx';
import {UniversalButton} from './UniversalButton.tsx';
import {EditableSpan} from './EditableSpan.tsx';


type ListItemPropsType = {
    tasks: tasksType[]
    deleteTask: (taskId: string) => void
    editTaskIsDone: (taskId: string) => void
    editTaskTitle: (taskId: string, title: string) => void
}

export const ListItem = ({editTaskTitle, editTaskIsDone, tasks, deleteTask}: ListItemPropsType) => {
const taskList=tasks && tasks.length === 0
        ? <span>Ваш список пуст</span>
        : <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <input type={'checkbox'} checked={task.isDone} onChange={() => {
                        editTaskIsDone(task.id)
                    }}/>
                    <EditableSpan  title={task.text} editTitle={(title:string)=>editTaskTitle(task.id,title)}/>
                    <UniversalButton title={'x'} callback={() => {
                        deleteTask(task.id)
                    }}/>
                </li>
            ))}
        </ul>

    return (
<>
    {taskList}
</>
    );
};

