type LuceneNode = {
    term?: string;
    operator?: 'AND' | 'OR';
    left?: LuceneNode;
    right?: LuceneNode;
};

// из объекта Lucene вытаск term и возвр массив массивов фраз
export const getKeywordsArr = (ast: LuceneNode): string[][] => {
    const cleanTerm = (term: string): string =>
        term.replace(/^["'“”‘’]+|["'“”‘’]+$/g, '');

    const extractCombinations = (node: LuceneNode): string[][] => {
        if (!node) return [];

        if (node.term) return [[cleanTerm(node.term)]];

        const left = extractCombinations(node.left!);
        const right = extractCombinations(node.right!);

        if (node.operator === 'AND') {
            const result: string[][] = [];
            for (const l of left) {
                for (const r of right) {
                    result.push([...l, ...r]);
                }
            }
            return result;
        }

        if (node.operator === 'OR') {
            return [...left, ...right];
        }

        return [];
    };

    return extractCombinations(ast);
};