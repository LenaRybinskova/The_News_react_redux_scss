import '../app/App.css'
import {HashRouter} from 'react-router-dom';
import {NewsCards} from '@/features/NewsCards/NewsCards.tsx';
import {KeywordsInput} from '@/common/components/InputKeywords/InputKeywords.tsx';
import {useEffect, useState} from 'react';
import {fetchNews} from '@/app/appReducer.ts';
import {useAppDispatch} from '@/app/store.ts';


function App() {
    const [data, setData] = useState([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNews())
    }, []);

    return (
        <HashRouter basename={import.meta.env.VITE_PUBLIC_URL}>
            <KeywordsInput/>
            {data && <NewsCards/>}
        </HashRouter>
    )
}

export default App
