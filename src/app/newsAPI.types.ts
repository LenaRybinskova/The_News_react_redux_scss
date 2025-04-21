export type IData_SnippetNews = {
    ID: number
    TI: string
    AB:string
    URL:string
    DP:string
    DOM:string

    LANG:string
    REACH:number
    KW:IData_TagItem[]
    AU:string[]
    CNTR:string
    CNTR_CODE:string
    SENT:string
    TRAFFIC:IData_TrafficItem[]
    FAV:string
    HIGHLIGHTS:string[]
}

export type IData_TagItem = {
    value:string
    count:number
}

export type IData_TrafficItem={
    value:string
    count:number
}
