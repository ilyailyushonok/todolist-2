import React from "react";


type EditableSpanPropsType = {
    title: string,
    editTitle: (title: string) => void,
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
    const [newValue, setNewValue] = React.useState<string>(props.title);

    const editabledOperacions = () => {
        setIsEditMode(false);
        props.editTitle(newValue)
    }
    const onBlurHandler = () => {
        editabledOperacions()
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {editabledOperacions()}
    }
    return (
        isEditMode
            ? <input
                autoFocus
                type="text"
                onChange={(e) => setNewValue(e.target.value)} value={newValue}
                onBlur={onBlurHandler}
                onKeyDown={onKeyPressHandler}
            />
            : <span onDoubleClick={() => setIsEditMode(true)}>{props.title}</span>
    )
}

