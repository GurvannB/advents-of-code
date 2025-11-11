import type {Solver} from '@core/types';
import {getLines} from "@core/utils";

export default {
    name: 'Probably a Fire Hazard',
    part1(input: string) {
        const map = new Array(1000).fill(false).map(() => new Array(1000).fill(false));
        const instructions = getLines(input);

        function applyInstruction(map: boolean[][], from: number[], to: number[], operation: (before: boolean) => boolean): number {
            let total = 0;
            for (let x = from[0]; x <= to[0]; x++) {
                for (let y = from[1]; y <= to[1]; y++) {
                    const before = map[y][x];
                    const after = operation(before);
                    if (!before && after) total++;
                    if (before && !after) total--;
                    map[y][x] = after;
                }
            }
            return total;
        }

        let total = 0;

        instructions.forEach((instruction) => {
            const parts = instruction.split(' ');
            const toCoords = parts.pop()!.split(',').map(Number);
            parts.pop(); // remove 'through'
            const fromCoords = parts.pop()!.split(',').map(Number);
            const operation = parts.join(' ');
            switch (operation) {
                case 'turn on':
                    total += applyInstruction(map, fromCoords, toCoords, () => true);
                    break;
                case 'turn off':
                    total += applyInstruction(map, fromCoords, toCoords, () => false);
                    break;
                case 'toggle':
                    total += applyInstruction(map, fromCoords, toCoords, (before) => !before);
            }
        });

        return total;
    },
    part2(input: string) {
        const map = new Array(1000).fill(0).map(() => new Array(1000).fill(0));
        const instructions = getLines(input);

        function applyInstruction(map: number[][], from: number[], to: number[], operation: (before: number) => number): number {
            let total = 0;
            for (let x = from[0]; x <= to[0]; x++) {
                for (let y = from[1]; y <= to[1]; y++) {
                    const before = map[y][x];
                    const after = operation(before);
                    total += after-before;
                    map[y][x] = after;
                }
            }
            return total;
        }

        let total = 0;

        instructions.forEach((instruction) => {
            const parts = instruction.split(' ');
            const toCoords = parts.pop()!.split(',').map(Number);
            parts.pop(); // remove 'through'
            const fromCoords = parts.pop()!.split(',').map(Number);
            const operation = parts.join(' ');
            switch (operation) {
                case 'turn on':
                    total += applyInstruction(map, fromCoords, toCoords, (before) => before + 1);
                    break;
                case 'turn off':
                    total += applyInstruction(map, fromCoords, toCoords, (before) => Math.max(0, before - 1));
                    break;
                case 'toggle':
                    total += applyInstruction(map, fromCoords, toCoords, (before) => before + 2);
                    break;
            }
        });

        return total;
    }
} satisfies Solver;
