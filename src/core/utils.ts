export function getLines(input: string): string[] {
    return input.trimEnd().split(/\r?\n/);
}

export function nums(input: string): number[] {
    return getLines(input).map(Number);
}

export function sum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}

export function firstNonEmptyLine(input: string): string | undefined {
    return getLines(input).find(l => l.trim().length > 0);
}

export function assert(condition: boolean, message: string): void {
    if (!condition) throw new Error(message);
}
