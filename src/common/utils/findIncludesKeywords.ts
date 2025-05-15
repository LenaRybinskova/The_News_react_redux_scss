
import {IData_SnippetNews} from '@/app/newsAPI.types.ts';

//функция ищет в новостях предложения по ключевым словам и эти предложения добавляет в HIGHLIGHTS, возвр массив предложений и счетчик, с счетчиком найденных слов
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