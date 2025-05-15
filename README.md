# The_News_react_redux_scss

https://lenarybinskova.github.io/The_News_react_redux_scss/

## В проекте использовались библиотеки:
- React
- React - Redux
- Scss
- Ant Design
- lucene-query-parser

- Vite (инструмент сборки)

Со старта приложения Вы попадает на главную страницу, при монтировании компоненты идет запрос за даннымы, которые сохрнаюятся в Redux.
При введении в инпут запроса он парсится на массив с массивом строк, происходи поиск совпадений в новости, если совпажения есть - выводится часть предложения с ключевыми словами, так же происходит подсчет количества совпажений.

Стейт в Redux организован как объект (асоциативные массивы) , для упрощения поиска по данным:
```
type  initialStateType = {
    news: Record<number, IData_SnippetNews>,
    filteredIDS:Number[],
    status: RequestStatus,
    keyWords:[]
    keyWordsCount:Record<string, number>
}
```

![Image alt](https://github.com/LenaRybinskova/The_News_react_redux_scss/blob/main/1.bmp)

