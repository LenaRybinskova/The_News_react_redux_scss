import {Button, Input} from 'antd';
import {useState} from 'react';
import {useAppDispatch} from '@/app/store.ts';
// @ts-ignore
import lucene from 'lucene-query-parser';
import {getKeywordsArr} from '@/common/utils/queryParser.ts';
import {filteredHightlightAC} from '@/app/appReducer.ts';

const {TextArea} = Input;

export const HighlightedTextarea = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();


    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.currentTarget.value);
    };
    const onClickHandler = () => {
        const parsed = lucene.parse(inputValue);
        const keyWords = getKeywordsArr(parsed);
        console.log("parsed lucene AST", keyWords);
        dispatch(filteredHightlightAC(keyWords));
    };


    return (
        <div>
            <div>(“Kaspersky” OR “Avast”) AND “antivirus”</div>
            <div>(TI=”Kaspersky” OR AB=”Avast”) AND NOT (DP=”2021-21-17” OR URL=”*.com”)</div>
            <div style={{color: 'white'}}>Введите запрос:</div>
            <TextArea rows={2} onChange={onChangeHandler}/>
            <Button type="primary" onClick={onClickHandler} style={{marginTop: 8}}>
                Поиск
            </Button>
        </div>
    )
}








