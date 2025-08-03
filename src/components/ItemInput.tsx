import React, {ChangeEvent, useState} from 'react';
import {UniversalButton} from './UniversalButton.tsx';

type ItemInputProps = {
    callback: (text: string) => void

}

export const ItemInput = ({callback}: ItemInputProps) => {
    const [text, setText] = useState('')
    const onChangeEventHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const currentValue = e.target.value;
        setText(currentValue);
    }
    const submitHandler = () => {
        if(text.trim().length > 0) {
            callback(text)
            setText('')
        }
    }
    const onClickEventHandler = () => {
        submitHandler()
    }


    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {submitHandler()}
    }
    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <input placeholder="Add task"  value={text} onChange={onChangeEventHandler} onKeyDown={onKeyPressHandler}/>
            <UniversalButton callback={onClickEventHandler} title={'+'}/>
        </div>
    );
};

