import type {Solver} from '@core/types';
import {getLines} from '@core/utils';

export default {
    name: 'Not Quite Lisp',
    part1(input: string) {
        const string = getLines(input).join('');
        let floor = 0;
        for (const char of string) {
            floor += char === '(' ? 1 : char === ')' ? -1 : 0;
        }
        return floor;
    },
    part2(input: string) {
        const s = getLines(input).join('');
        let floor = 0;
        for (let i = 0; i < s.length; i++) {
            floor += s[i] === '(' ? 1 : s[i] === ')' ? -1 : 0;
            if (floor < 0) return i + 1;
        }
        return 'Jamais atteint';
    }
} satisfies Solver;
