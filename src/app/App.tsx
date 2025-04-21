import '../app/App.css'
import {HashRouter} from 'react-router-dom';
import {NewsCards} from '@/features/NewsCards/NewsCards.tsx';
import {KeywordsInput} from '@/common/components/InputKeywords/InputKeywords.tsx';
import {useEffect, useState} from 'react';


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <HashRouter basename={import.meta.env.VITE_PUBLIC_URL}>
            <KeywordsInput/>
            {data && <NewsCards/>}
        </HashRouter>
    )
}

export default App
