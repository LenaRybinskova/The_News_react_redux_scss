import {IData_SnippetNews} from '@/api/newsAPI.types.ts';
// возвращает массив с фразами и колчество совпадений
export const findSentencesWithKeywords = (
    news: Record<number, IData_SnippetNews>,
    keywordGroups: string[][]
): {
    highlightsById: Record<number, string[]>,
    keyWordsCount: Record<string, number>
} => {
    const result: Record<number, string[]> = {};
    const keyWordsCount: Record<string, number> = {};

    const groupKeys = keywordGroups.map(group => group.map(k => k.toLowerCase()).join(' '));
    for (const key of groupKeys) {
        keyWordsCount[key] = 0;
    }

    for (const [id, item] of Object.entries(news)) {
        const highlights: string[] = [];
        const sentences = item.AB.match(/[^.?!]+[.?!]/g);

        if (sentences) {
            for (const sentence of sentences) {
                const sentenceLower = sentence.toLowerCase();

                keywordGroups.forEach((group) => {
                    const matched = group.every(keyword => sentenceLower.includes(keyword.toLowerCase()));
                    if (matched) {
                        const groupKey = group.map(k => k.toLowerCase()).join(' ');
                        keyWordsCount[groupKey] += 1;
                        highlights.push(sentence.trim());
                    }
                });
            }
        }

        result[+id] = highlights;
    }

    return { highlightsById: result, keyWordsCount };
};