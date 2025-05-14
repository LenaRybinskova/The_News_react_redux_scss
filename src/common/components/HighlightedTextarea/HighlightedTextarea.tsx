import {Input} from 'antd';
import {useState} from 'react';
import {useAppDispatch} from '@/app/store.ts';


const {TextArea} = Input;

export const HighlightedTextarea = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value);
    }


    return (
        <div>
            <div style={{color: 'white'}}>Введите запрос:</div>
            <TextArea rows={2} onChange={onChangeHandler}/>
        </div>
    )
}








