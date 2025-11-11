import type {Solver} from '@core/types';
import {getLines} from "@core/utils";

function getLineValuePart1(line: string): number {
    const string = line.replace(/\\x([0-9A-Fa-f]{2})/g, (_, hex) => {
        return "\\u00" + hex;
    });
    return line.length - JSON.parse(string).length;
}

function getLineValuePart2(line: string): number {
    const newLine = line.replaceAll("\\", "\\\\").replaceAll('"', "\\\"");
    return newLine.length + 2 - line.length;
}

export default {
    name: 'Matchsticks',
    part1(input: string) {
        const lines = getLines(input);
        return lines.reduce((acc, i) => acc + getLineValuePart1(i), 0);
    },
    part2(input: string) {
        const lines = getLines(input);
        return lines.reduce((acc, i) => acc + getLineValuePart2(i), 0);
    }
} satisfies Solver;
