import React, {ChangeEvent, useState} from "react";


type addNewTodolistPropsType = {
    addNewTodolist: (title: string) => void
}

export const AddNewTodolist = ({addNewTodolist}: addNewTodolistPropsType) => {
   const [title, setTitle] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const submitHandler = () => {
        if(title) addNewTodolist(title)
        setTitle('')
    }
    const onClickHandler = () => {
        submitHandler()
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {submitHandler()}
    }
    return (
        <div>
            <input type={'text'} placeholder={"add todolist"} onChange={onChangeHandler} value={title} onKeyDown={onKeyPressHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

