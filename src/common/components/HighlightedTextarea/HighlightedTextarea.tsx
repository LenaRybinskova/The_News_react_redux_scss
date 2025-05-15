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
        const parse = lucene.parse(inputValue);
        const keyWords = getKeywordsArr(parse);
        console.log("keyWords", keyWords)
        dispatch(filteredHightlightAC(keyWords));
    };


    return (
        <div style={{color: 'white', display:"flex",  flexDirection:"column", gap:"15px"}}>
            <div>Пример запроса:<p style={{fontSize: '24px'}} >(“Kaspersky” OR “Avast”) AND “antivirus”</p></div>
            <div style={{display:"flex",  flexDirection:"row", gap:"15px"}}>
                <TextArea rows={2} onChange={onChangeHandler}/>
                <Button type="primary" onClick={onClickHandler} style={{marginTop: 8}}>
                    Поиск
                </Button>
            </div>

        </div>
    )
}








