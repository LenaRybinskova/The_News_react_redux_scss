import React, {useState} from 'react';
import {useAppDispatch} from '@/app/store.ts';
import {filteredHightlightAC} from '@/app/appReducer.ts';


export function KeywordsInput() {
    const [inputValue, setInputValue] = useState('');
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
        <div style={{display: 'flex', gap: '8px'}}>
            <input
                type="text"
                placeholder="InnovTech, autonomus driving, AutoPilot 5000"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSearch} style={{padding: '8px 16px'}}>
                Искать новости
            </button>
        </div>
    );
}