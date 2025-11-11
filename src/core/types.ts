export type Solver = {
    part1: (input: string) => string | number;
    part2: (input: string) => string | number;
    name: string;
    notes?: string;
};

export type Registry = Record<string, Record<string, Solver>>;
