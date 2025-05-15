/*
import {IData_SnippetNews} from '@/app/newsAPI.types.ts';

export const findSentencesWithKeywords = (
    news: Record<number, IData_SnippetNews>,
    keywords: string[]
): {
    highlightsById: Record<number, string[]>,
    keyWordsCount: Record<string, number>
} => {
    const result: Record<number, string[]> = {}
    const keyWordsCount: Record<string, number> = {}

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

                    const matchIndex = sentence.toLowerCase().indexOf(matches[0].toLowerCase())
                    const sliced = sentence.slice(0, matchIndex + matches[0].length).trim()
                    highlights.push(sliced)
                }
            }
        }

        result[+id] = highlights
    }

    return { highlightsById: result, keyWordsCount }
}*/


import {IData_SnippetNews} from '@/app/newsAPI.types.ts';

//функция ищет с в новостях предложения по ключевым словам и возвращает объект с новостями (ид: новость) и каунт
export const findSentencesWithKeywords = (
    news: Record<number, IData_SnippetNews>,
    keywordGroups: string[][]
): {
    highlightsById: Record<number, string[]>,
    keyWordsCount: Record<string, number>
} => {
    const result: Record<number, string[]> = {};
    const keyWordsCount: Record<string, number> = {};

    const flatKeywords = keywordGroups.flat().map(k => k.toLowerCase());
    for (const word of flatKeywords) {
        keyWordsCount[word] = 0;
    }

    for (const [id, item] of Object.entries(news)) {
        const highlights: string[] = [];
        const sentences = item.AB.match(/[^.?!]+[.?!]/g);

        if (sentences) {
            for (const sentence of sentences) {
                const sentenceLower = sentence.toLowerCase();

                const matchedGroup = keywordGroups.find(group =>
                    group.every(keyword => sentenceLower.includes(keyword.toLowerCase()))
                );

                if (matchedGroup) {
                    for (const keyword of matchedGroup) {
                        keyWordsCount[keyword.toLowerCase()] += 1;
                    }
                    highlights.push(sentence.trim());
                }
            }
        }

        result[+id] = highlights;
    }

    return { highlightsById: result, keyWordsCount };
};