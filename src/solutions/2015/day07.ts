import type {Solver} from '@core/types';
import {getLines} from "@core/utils";

function not(value: number) {
    return 65535 - value;
}

function and(value1: number, value2: number) {
    return value1 & value2;
}

function or(value1: number, value2: number) {
    return value1 | value2;
}

function lshift(value: number, shift: number) {
    return value << shift;
}

function rshift(value: number, shift: number) {
    return value >> shift;
}

function resolveWires(wires: Map<string, { expression: string, value?: number }>): number | string {
    const TO_FIND_WIRE = 'a';

    const wire = wires.get(TO_FIND_WIRE);

    function resolve(destination: string, expression: string): number | undefined {
        const destinationValue = wires.get(destination)?.value;
        if (destinationValue) return destinationValue;
        const parts = expression.split(' ');
        let value = undefined;
        switch (parts.length) {
            case 1:
                if (Number(parts[0]).toString() !== 'NaN') {
                    value = Number(parts[0]);
                } else {
                    const expr = wires.get(parts[0])!.expression;
                    if (!expr) {
                        console.log(`No expression found for ${expression} -> ${destination}`);
                    }
                    value = resolve(parts[0], expr);
                }
                break;
            case 2:
                value = not(resolve(parts[1], wires.get(parts[1])!.expression)!);
                break;
            default:
                const left = Number(parts[0]) ? Number(parts[0]) : resolve(parts[0], wires.get(parts[0])!.expression)!;
                const right = Number(parts[2]) ? Number(parts[2]) : resolve(parts[2],  wires.get(parts[2])!.expression)!;
                if (parts[1] === 'AND') {
                    value = and(left, right);
                } else if (parts[1] === 'OR') {
                    value = or(left, right);
                } else if (parts[1] === 'LSHIFT') {
                    value = lshift(left, right);
                } else if (parts[1] === 'RSHIFT') {
                    value = rshift(left, right);
                }
                break;
        }
        wires.set(destination, {expression, value});
        if (value === undefined) {
            throw new Error(`Could not resolve ${destination} with expression ${expression}`);
        }
        return value;
    }

    if (!wire) {
        throw new Error(`Expression not found`);
    }
    return resolve(TO_FIND_WIRE, wire.expression) ?? 'Cannot resolve';
}

export default {
    name: 'Some Assembly Required',
    part1(input: string) {
        const allLines = getLines(input);
        const wires = new Map<string, { expression: string, value?: number }>();
        allLines.forEach((line) => {
            wires.set(line.split(" -> ")[1], {
                expression: line.split(" -> ")[0],
            });
        });
        return resolveWires(wires);
    },
    part2(input: string) {
        const allLines = getLines(input);
        const wires = new Map<string, { expression: string, value?: number }>();
        allLines.forEach((line) => {
            wires.set(line.split(" -> ")[1], {
                expression: line.split(" -> ")[0],
            });
        });
        const result = resolveWires(wires);
        const wires2 = new Map<string, { expression: string, value?: number }>();
        allLines.forEach((line) => {
            wires2.set(line.split(" -> ")[1], {
                expression: line.split(" -> ")[1] === 'b' ? result.toString() : line.split(" -> ")[0],
            });
        });
        return resolveWires(wires2);
    }
} satisfies Solver;
