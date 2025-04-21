# The_News_react_redux_scss

https://lenarybinskova.github.io/The_News_react_redux_scss/

## В проекте использовались библиотеки:
- React
- React - Redux
- Scss
- Ant Design

- Vite (инструмент сборки)

Со старта приложения Вы попадает на главную страницу, при монтировании компоненты идет запрос за даннымы, которые сохрнаюятся в Redux.
При введении в инпут ключевых слов через запятую, данные в Redux перебираются на наличие совпадений с ключевыми словами, если есть совпадения, то сохранятеся часть новости( предложение с самого начала и до ключевого слова), так же происходит и выводится подсчет найденных совпаденний по ключевым словам.

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
