import type {Solver} from '@core/types';

function repeat(input: string) {
    let char = '';
    let result = '';
    let streak = 0;
    for (let i=0; i<input.length; i++) {
        if (char === '') {
            char = input.charAt(i);
            streak = 1;
        } else {
            if (input.charAt(i) === char) {
                streak++;
            } else {
                result += `${streak}${char}`;
                char = input.charAt(i);
                streak = 1;
            }
        }
    }
    result += `${streak}${char}`;
    return result;
}

export default {
    name: 'Elves Look, Elves Say',
    part1(input: string) {
        let result = input;
        for (let i=0; i<40; i++) {
            result = repeat(result);
        }
        return result.length;
    },
    part2(input: string) {
        let result = input;
        for (let i=0; i<50; i++) {
            result = repeat(result);
        }
        return result.length;
    }
} satisfies Solver;
