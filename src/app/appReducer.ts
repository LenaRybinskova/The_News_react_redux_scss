import {newsApi} from '@/api/newsApi.ts';
import {IData_SnippetNews} from '@/app/newsAPI.types.ts';
import {findSentencesWithKeywords} from '@/common/utils/utils.ts';


export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed'
type  initialStateType = {
    news: Record<number, IData_SnippetNews>,
    filteredIDS:Number[],
    status: RequestStatus,
}

const initialState: initialStateType = {
    news: {},
    status: 'idle',
    filteredIDS:[] as Number[],
}


const SET_NEWS = 'SET_NEWS'
const FILTERED_TEXT = 'FILTERED_TEXT'
const SET_APP_STATUS = 'SET_APP_STATUS'

export const appReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_NEWS:
            return {...state, news: {...state.news, [action.payload.ID]: action.payload,}}
        case FILTERED_TEXT:
            const copyNews = {...state.news}
            const newHighLight = findSentencesWithKeywords(copyNews, action.payload)
            const filteredIDS = Object.keys(state.news).filter(id => newHighLight[+id]?.length > 0).map(id => +id);

            const updatedNews = Object.entries(state.news).reduce((acc, [id, newsItem]) => {
                if (filteredIDS.includes(+id)) {
                    acc[+id] = {...newsItem, HIGHLIGHTS: newHighLight[+id] || [],};
                } else {
                    acc[+id] = newsItem;
                }
                return acc;
            }, {} as Record<number, IData_SnippetNews>);

            return {...state, news: updatedNews, filteredIDS,};

        default:
            return state
    }
}
export const setNewsAC = (data: IData_SnippetNews) => {
    return {
        type: SET_NEWS,
        payload: data
    } as const
}

export const filteredHightlightAC = (keywords: String[]) => {
    console.log("filteredHightlightAC")
    return {
        type: FILTERED_TEXT,
        payload: keywords
    } as const
}


export const setAppStatusAC = (status: RequestStatus) => {
    return {
        type: SET_APP_STATUS,
        payload: status
    } as const
}

export type SetNews = ReturnType<typeof setNewsAC>
export type FilteredText = ReturnType<typeof filteredHightlightAC>
export type SetAppStatus = ReturnType<typeof setAppStatusAC>
export type AppActions = SetNews | SetAppStatus | FilteredText

export const fetchNews = () => async (dispatch: any) => {
    dispatch(setAppStatusAC('loading'))
    return newsApi.getNews()
        .then((data) => {
            dispatch(setNewsAC(data))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(() => {
                dispatch(setAppStatusAC('failed'))
                throw new Error('Failed to fetch info')
            }
        )
}
