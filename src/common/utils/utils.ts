import {IData_SnippetNews} from '@/app/newsAPI.types.ts';

export const findSentencesWithKeywords = (
    news: Record<number, IData_SnippetNews>,
    keywords: string[]
): Record<number, string[]> => {
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'i')
    const result: Record<number, string[]> = {}

    for (const [id, item] of Object.entries(news)) {
        const highlights: string[] = []
        const sentences = item.AB.match(/[^.?!]+[.?!]/g)

        if (sentences) {
            for (const sentence of sentences) {
                const match = sentence.match(keywordRegex)
                if (match) {
                    const matchIndex = sentence.toLowerCase().indexOf(match[0].toLowerCase())
                    const sliced = sentence.slice(0, matchIndex + match[0].length).trim()
                    highlights.push(sliced)
                }
            }
        }

        result[+id] = highlights
    }

    return result
}