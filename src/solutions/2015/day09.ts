import type {Solver} from '@core/types';
import {getLines} from "@core/utils";

export default {
    name: 'All in a Single Night',
    part1(input: string) {
        // const lines = getLines(input);
        // const cities = new Map<string, { paths: { to: string, distance: number }[] }>();
        // lines.forEach((line) => {
        //     const parts = line.split(' = ');
        //     const distance = Number(parts[1]);
        //     const cityParts = parts[0].split(' to ');
        //     if (cities.has(cityParts[0])) {
        //         cities.set(cityParts[0], {paths: [...cities.get(cityParts[0])?.paths ?? [], {to: cityParts[1], distance}]});
        //     } else {
        //         cities.set(cityParts[0], {paths: [{to: cityParts[1], distance}]});
        //     }
        //
        //     if (cities.has(cityParts[1])) {
        //         cities.set(cityParts[1], {paths: [...cities.get(cityParts[1])?.paths ?? [], {to: cityParts[1], distance}]});
        //     } else {
        //         cities.set(cityParts[1], {paths: [{to: cityParts[0], distance}]});
        //     }
        // });
        //
        // cities.entries().forEach((props) => {
        //     const [key, value] = props;
        //     const visitedCities = new Set<string>();
        //     visitedCities.add(key);
        //     for (let i=0; i < value.paths.length; i++) {
        //         const path = value.paths[i];
        //         visitedCities.add(path.to);
        //     }
        // });

        return "TO DO!";
    },
    part2(input: string) {
        return "TO DO!";
    }
} satisfies Solver;
