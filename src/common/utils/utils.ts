export const findSentencesWithKeywords = (
    news: Record<number, IData_SnippetNews>,
    keywords: string[]
): {
    highlightsById: Record<number, string[]>,
    keyWordsCount: Record<string, number>
} => {
    const result: Record<number, string[]> = {}
    const keyWordsCount: Record<string, number> = {}

    // Инициализируем счётчики ключевых слов
    for (const word of keywords) {
        keyWordsCount[word.toLowerCase()] = 0
    }

    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi')

    for (const [id, item] of Object.entries(news)) {
        const highlights: string[] = []
        const sentences = item.AB.match(/[^.?!]+[.?!]/g)

        if (sentences) {
            for (const sentence of sentences) {
                const matches = sentence.match(keywordRegex)

                if (matches) {
                    // Подсчёт ключевых слов
                    for (const match of matches) {
                        const word = match.toLowerCase()
                        if (keyWordsCount[word] !== undefined) {
                            keyWordsCount[word] += 1
                        }
                    }

                    // Добавляем предложение с первым найденным совпадением
                    const matchIndex = sentence.toLowerCase().indexOf(matches[0].toLowerCase())
                    const sliced = sentence.slice(0, matchIndex + matches[0].length).trim()
                    highlights.push(sliced)
                }
            }
        }

        result[+id] = highlights
    }

    return { highlightsById: result, keyWordsCount }
}