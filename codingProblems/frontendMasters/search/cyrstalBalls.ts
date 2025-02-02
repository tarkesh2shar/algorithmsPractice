// The "Two Crystal Balls" problem is a classic algorithm question that involves finding the first 
// occurrence of a "break" in a sequence of boolean values, where `false` represents no break 
// and `true` represents a break. The challenge is to minimize the number of checks needed to find 
// the first `true` in the list, simulating the idea of dropping crystal balls from a building 
// to see which floor they break on. The goal is to determine the first occurrence of `true` 
// using an efficient approach that minimizes the number of attempts.

export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = 0;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jumpAmount;
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}

