import {newsApi} from '@/api/newsApi.ts';
import {IData_SnippetNews} from '@/app/newsAPI.types.ts';



export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed'
type  initialStateType = {
    news: Record<number, IData_SnippetNews>,
    status: RequestStatus,
}

const initialState: initialStateType = {
    news: {},
    status: 'idle',
}


const SET_NEWS = 'SET_NEWS'
const SET_APP_STATUS = 'SET_APP_STATUS'

export const appReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_NEWS:
            return {...state, news: {...state.news, [action.payload.ID]: action.payload, }}
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

export const setAppStatusAC = (status: RequestStatus) => {
    return {
        type: SET_APP_STATUS,
        payload: status
    } as const
}

export type SetNews = ReturnType<typeof setNewsAC>
export type SetAppStatus = ReturnType<typeof setAppStatusAC>
export type AppActions = SetNews | SetAppStatus

export const fetchNews = () => async (dispatch: any) => {
    dispatch(setAppStatusAC('loading'))
    console.log('fetchNews')
    return newsApi.getNews()
        .then((data) => {
            console.log('data', data)
            dispatch(setNewsAC(data))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(() => {
                dispatch(setAppStatusAC('failed'))
                throw new Error('Failed to fetch info')
            }
        )
}
