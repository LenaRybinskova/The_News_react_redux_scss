import '../app/App.css'
import {HashRouter} from 'react-router-dom';
import {NewsCards} from '@/features/NewsCards/NewsCards.tsx';
import {KeywordsInput} from '@/common/components/InputKeywords/InputKeywords.tsx';
import {useEffect, useState} from 'react';
import {fetchNews} from '@/app/appReducer.ts';
import {AppRootStateType, useAppDispatch} from '@/app/store.ts';
import {useSelector} from 'react-redux';
import {IData_SnippetNews} from '@/app/newsAPI.types.ts';


function App() {
    const [newsData, setNewsData] = useState<IData_SnippetNews[] | null>(null);
    const highlightsID = useSelector<AppRootStateType, Number[]>(state => state.app.filteredIDS);

    const newsWithHighlights = useSelector<AppRootStateType, IData_SnippetNews[]>(state => {
        const ids = state.app.filteredIDS
        const news = state.app.news
        return ids.map(id => news[id as number])
    })

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNews())
    }, []);

    useEffect(() => {
        setNewsData(newsWithHighlights)
    }, [highlightsID]);


    return (
        <HashRouter basename={import.meta.env.VITE_PUBLIC_URL}>
            <KeywordsInput/>
            {newsData && newsData.map(newItem=><NewsCards key={newItem.ID} newItem={newItem}/>)}
        </HashRouter>
    )
}

export default App
