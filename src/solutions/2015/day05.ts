import type {Solver} from '@core/types';
import {getLines} from "@core/utils";

export default {
    name: 'Doesn\'t He Have Intern-Elves For This?',
    part1(input: string) {
        const words = getLines(input);

        function isNice(word: string): boolean {
            let vowelCount = 0;
            let previousLetter = '';
            let hasDoubleLetter = false;
            const forbiddenPairs = ['ab', 'cd', 'pq', 'xy'];
            for (const c of word) {
                if ('aeiou'.includes(c)) vowelCount++;
                if (c === previousLetter) hasDoubleLetter = true;
                if (forbiddenPairs.includes(`${previousLetter}${c}`)) return false;
                previousLetter = c;
            }
            return vowelCount >= 3 && hasDoubleLetter;
        }

        return words.reduce((acc, i) => {
            if (isNice(i)) return acc + 1;
            return acc;
        }, 0);
    },
    part2(input: string) {
        const words = getLines(input);

        function isNice(word: string): boolean {
            const pairs: string[] = [];
            let previousLetter = '';
            let mirrorLetter = false;
            for (let i = 0; i<word.length; i++) {
                const c = word[i];
                if (i >= 1) {
                    const pair = `${previousLetter}${c}`;
                    pairs.push(pair);
                }
                previousLetter = c;
                if (i >= 2 && word[i - 2] === c) {
                    mirrorLetter = true;
                }
            }
            const duplicatedPair = pairs.filter((pair, index) => pairs.findIndex((p) => p === pair) != index);
            const goodPairs = duplicatedPair.map((pair) => {
               const pairIndexes: number[] = [];
               pairs.forEach((p, index) => {
                   if (p === pair) pairIndexes.push(index);
               });
               return pairIndexes.length > 2 || pairIndexes[1] - pairIndexes[0] > 1;
            });
            return mirrorLetter && !!goodPairs.filter(Boolean).length;
        }

        return words.reduce((acc, i) => {
            if (isNice(i)) return acc + 1;
            return acc;
        }, 0);
    }
} satisfies Solver;
