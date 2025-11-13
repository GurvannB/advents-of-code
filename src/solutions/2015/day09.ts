import type {Solver} from '@core/types';
import {getLines} from "@core/utils";

type Path = {
    destination: string;
    distance: number;
}

export default {
    name: 'All in a Single Night',
    part1(input: string) {
        const lines = getLines(input);
        const cities = new Map<string, { paths: Path[] }>();
        lines.forEach((line) => {
            const parts = line.split(' = ');
            const distance = Number(parts[1]);
            const cityParts = parts[0].split(' to ');

            if (cities.has(cityParts[0])) {
                cities.set(cityParts[0], {
                    paths: [...cities.get(cityParts[0])?.paths ?? [], {
                        destination: cityParts[1],
                        distance
                    }]
                });
            } else {
                cities.set(cityParts[0], {paths: [{destination: cityParts[1], distance}]});
            }

            if (cities.has(cityParts[1])) {
                cities.set(cityParts[1], {
                    paths: [...cities.get(cityParts[1])?.paths ?? [], {
                        destination: cityParts[0],
                        distance
                    }]
                });
            } else {
                cities.set(cityParts[1], {paths: [{destination: cityParts[0], distance}]});
            }
        });

        function visit(from: string, visitedCities: Set<string>, totalDistance: number): number {
            visitedCities.add(from);
            const paths = cities.get(from)?.paths ?? [];
            const distances: number[] = [];
            for (const path of paths) {
                if (!visitedCities.has(path.destination)) {
                    const distance = visit(path.destination, new Set(visitedCities), totalDistance + path.distance);
                    if (distance !== -1) distances.push(distance);
                }
            }
            if (!distances.length && visitedCities.size !== cities.size) {
                return -1;
            }
            return distances.length ? Math.min(...distances) : totalDistance;
        }

        const distances: number[] = Array.from(cities.keys()).map((key) => visit(key, new Set(), 0)).filter((n) => n !== -1);
        return Math.min(...distances);
    },
    part2(input: string) {
        const lines = getLines(input);
        const cities = new Map<string, { paths: Path[] }>();
        lines.forEach((line) => {
            const parts = line.split(' = ');
            const distance = Number(parts[1]);
            const cityParts = parts[0].split(' to ');

            if (cities.has(cityParts[0])) {
                cities.set(cityParts[0], {
                    paths: [...cities.get(cityParts[0])?.paths ?? [], {
                        destination: cityParts[1],
                        distance
                    }]
                });
            } else {
                cities.set(cityParts[0], {paths: [{destination: cityParts[1], distance}]});
            }

            if (cities.has(cityParts[1])) {
                cities.set(cityParts[1], {
                    paths: [...cities.get(cityParts[1])?.paths ?? [], {
                        destination: cityParts[0],
                        distance
                    }]
                });
            } else {
                cities.set(cityParts[1], {paths: [{destination: cityParts[0], distance}]});
            }
        });

        function visit(from: string, visitedCities: Set<string>, totalDistance: number): number {
            visitedCities.add(from);
            const paths = cities.get(from)?.paths ?? [];
            const distances: number[] = [];
            for (const path of paths) {
                if (!visitedCities.has(path.destination)) {
                    const distance = visit(path.destination, new Set(visitedCities), totalDistance + path.distance);
                    if (distance !== -1) distances.push(distance);
                }
            }
            if (!distances.length && visitedCities.size !== cities.size) {
                return -1;
            }
            return distances.length ? Math.max(...distances) : totalDistance;
        }

        const distances: number[] = Array.from(cities.keys()).map((key) => visit(key, new Set(), 0)).filter((n) => n !== -1);
        return Math.max(...distances);
    }
} satisfies Solver;
