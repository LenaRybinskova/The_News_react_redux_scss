import React, {useState} from 'react';
import {useAppDispatch} from '@/app/store.ts';
import {filteredHightlightAC} from '@/app/appReducer.ts';

import {Input, Button} from 'antd';


export function KeywordsInput() {
    const [inputValue, setInputValue] = useState('smartphone');
    const dispatch = useAppDispatch();

    const handleSearch = () => {
        const keywords = inputValue
            .split(',')
            .map((word) => word.trim())
            .filter((word) => word !== '');

        dispatch(filteredHightlightAC(keywords))
        setInputValue('');
    };


    return (
        <div style={{display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ color: 'white' }}>Введите ключевые слова через запятую: </div>
            <Input
                placeholder="smartphone, consumers"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPressEnter={handleSearch}
                allowClear
                size="large"
                style={{maxWidth: 400}}
            />
            <Button type="primary" onClick={handleSearch} size="large">
                Искать
            </Button>
        </div>
    );


}