import type {Solver} from '@core/types';
import {getLines, sum} from "@core/utils";

export default {
    name: 'I Was Told There Would Be No Math',
    part1(input: string) {
        const boxes = getLines(input);
        return boxes.map((box) => {
            const measurements = box.split('x').map((s) => Number(s));
            const sides = [measurements[0] * measurements[1], measurements[1] * measurements[2], measurements[2] * measurements[0]];
            return sum(sides) * 2 + Math.min(...sides);
        }).reduce((acc, i) => acc + i, 0);
    },
    part2(input: string) {
        const boxes = getLines(input);
        return boxes.map((box) => {
            const measurements = box.split('x').map((s) => Number(s));

            // Ribbon
            const ribbonSizes = measurements.sort((a, b) => a - b).slice(0, 2);
            const ribbon = sum(ribbonSizes) * 2;

            // Bow
            const bow = measurements[0] * measurements[1] * measurements[2];

            return ribbon+bow;
        }).reduce((acc, i) => acc + i, 0);
    }
} satisfies Solver;
