import type {Solver} from '@core/types';

function isPasswordValid(password: string): boolean {
    let hasIncreasingStraight = false;
    const pairs: string[] = [];
    let previousChar = '';
    for (let i=0; i<password.length; i++) {
        if (password.charAt(i) === previousChar) {
            pairs.push(password.charAt(i));
            previousChar = '';
        } else {
            previousChar = password.charAt(i);
        }
        if (i > 1) {
            const firstCharCode = password.charCodeAt(i-2);
            const secondCharCode = password.charCodeAt(i-1);
            const thirdCharCode = password.charCodeAt(i);
            if (secondCharCode === firstCharCode + 1 && thirdCharCode === secondCharCode + 1) {
                hasIncreasingStraight = true;
            }
        }
    }

    return hasIncreasingStraight && pairs.length > 1 && !password.match(/[iol]/);
}

// Get next password even if its invalid
function getNextPassword(password: string): string {
    const passwordChars = password.split('');
    let passwordCharCodes = passwordChars.map(c => c.charCodeAt(0));
    let index = passwordCharCodes.length - 1;
    let carry = true;
    while (carry) {
        if (index < 0) {
            carry = false;
            passwordCharCodes = [97, ...passwordCharCodes];
        } else {
            if (passwordCharCodes[index] === 122) {
                passwordCharCodes[index] = 97;
            } else {
                passwordCharCodes[index]++;
                carry = false
            }
        }
        index--;
    }
    /// TODO: Shortcut les iol
    return String.fromCharCode(...passwordCharCodes);
}

export default {
    name: 'Corporate Policy',
    part1(input: string) {
        let result = input;
        do {
            result = getNextPassword(result);
        } while (!isPasswordValid(result));
        return result;
    },
    part2(input: string) {
        return this.part1(this.part1(input).toString());
    }
} satisfies Solver;
