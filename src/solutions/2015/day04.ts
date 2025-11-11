import type {Solver} from '@core/types';
import md5 from 'md5';

export default {
    name: 'Perfectly Spherical Houses in a Vacuum',
    part1(input: string) {
        let i = 0;
        while (true) {
            const hash = md5(`${input}${i}`);
            if (hash.startsWith('00000')) {
                return i;
            }
            i++;
        }
    },
    part2(input: string) {
        let i = 0;
        while (true) {
            const hash = md5(`${input}${i}`);
            if (hash.startsWith('000000')) {
                return i;
            }
            i++;
        }
    }
} satisfies Solver;
