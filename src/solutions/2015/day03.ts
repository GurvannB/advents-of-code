import type {Solver} from '@core/types';

export default {
    name: 'Perfectly Spherical Houses in a Vacuum',
    part1(input: string) {
        let x = 0;
        let y = 0;
        let total = 1;
        const visited = [];
        visited.push(`x=${x},y=${y}`);
        for (const c of input) {
            if (c === '^') y--;
            else if (c === 'v') y++;
            else if (c === '>') x++;
            else if (c === '<') x--;
            if (!visited.find((c) => c === `x=${x},y=${y}`)) {
                total++;
                visited.push(`x=${x},y=${y}`);
            }
        }
        return total;
    },
    part2(input: string) {
        let santaX = 0;
        let santaY = 0;
        let robotX = 0;
        let robotY = 0;
        let santaTurn = true;
        let total = 1;
        const visited = [];
        visited.push(`x=${santaX},y=${santaY}`);
        for (const c of input) {
            if (santaTurn) {
                if (c === '^') santaY--;
                else if (c === 'v') santaY++;
                else if (c === '>') santaX++;
                else if (c === '<') santaX--;
                if (!visited.find((c) => c === `x=${santaX},y=${santaY}`)) {
                    total++;
                    visited.push(`x=${santaX},y=${santaY}`);
                }
            } else {
                if (c === '^') robotY--;
                else if (c === 'v') robotY++;
                else if (c === '>') robotX++;
                else if (c === '<') robotX--;
                if (!visited.find((c) => c === `x=${robotX},y=${robotY}`)) {
                    total++;
                    visited.push(`x=${robotX},y=${robotY}`);
                }
            }
            santaTurn = !santaTurn;
        }
        return total;
    }
} satisfies Solver;
