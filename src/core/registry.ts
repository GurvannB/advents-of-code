import type {Registry} from './types';

import day01_2015 from '@solutions/2015/day01';
import day02_2015 from '@solutions/2015/day02';
import day03_2015 from "@solutions/2015/day03";
import day04_2015 from "@solutions/2015/day04";
import day05_2015 from "@solutions/2015/day05";
import day06_2015 from "@solutions/2015/day06";
import day07_2015 from "@solutions/2015/day07";
import day08_2015 from "@solutions/2015/day08";
import day09_2015 from "@solutions/2015/day09";
import day10_2015 from "@solutions/2015/day10";
import day11_2015 from "@solutions/2015/day11";

export const registry: Registry = {
    '2015': {
        day01: day01_2015,
        day02: day02_2015,
        day03: day03_2015,
        day04: day04_2015,
        day05: day05_2015,
        day06: day06_2015,
        day07: day07_2015,
        day08: day08_2015,
        day09: day09_2015,
        day10: day10_2015,
        day11: day11_2015,
    },
};

export const years = Object.keys(registry).sort();

export function daysFor(year: string): string[] {
    return Object.keys(registry[year] ?? {}).sort();
}
