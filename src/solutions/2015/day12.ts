import type {Solver} from '@core/types';

export default {
    name: 'JSAbacusFramework.io',
    part1(input: string) {
        function getTotal(object: any): number {
            switch (typeof object) {
                case 'number':
                    return Number(object);
                case 'object':
                    if (Array.isArray(object)) {
                        return object.reduce((acc, i) => acc + getTotal(i), 0);
                    } else {
                        let total = 0;
                        for (const field in object) {
                            total += getTotal(object[field]);
                        }
                        return total;
                    }
                default:
                    return 0;
            }
        }

        return getTotal(JSON.parse(input));
    },
    part2(input: string) {
        function getTotal(object: any): number {
            switch (typeof object) {
                case 'number':
                    return Number(object);
                case 'object':
                    if (Array.isArray(object)) {
                        return object.reduce((acc, i) => acc + getTotal(i), 0);
                    } else {
                        let total = 0;
                        for (const field in object) {
                            if (object[field] === 'red') {
                                return 0;
                            }
                            total += getTotal(object[field]);
                        }
                        return total;
                    }
                default:
                    return 0;
            }
        }

        return getTotal(JSON.parse(input));
    }
} satisfies Solver;
