'use strict';

// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

function countSheep (n) {
    if (n<=0 || typeof(n) !== 'number') {
        console.log('All sheep jumped over the fence.')
    } else {
        console.log(`${n}: Another sheep jumps over the fence`)
        countSheep(n-1)
    }
}


// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculatorRec(10,2) should return 100
// powerCalculatorRec(10,-2) should return exponent should be >= 0

function powerCalculatorRec (base, exponent) {
    if (exponent < 0) {
        return 'exponent should be >= 0'
    } else if (base < 0) {
        return 'base should be >= 0'
    } else if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    } else {
        return (base * (powerCalculatorRec(base, exponent-1)))
    }
}

// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString (string) {
    if (typeof(string) !== 'string') return 'input value must be a string'
    if (string.length > 0) {
    const lastchar = string[string.length-1];
    return lastchar + reverseString(string.slice(0, -1));
    } else {
        return ''
    }
}


// 4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

//                           *
//             *           *    *
// *     |   *   *  |   *    *    *  |

//  1st       2nd           3rd             nth?  

function nthTriangularNumber (n) {
    if (n < 1 || typeof(n) !== 'number') return 'n must be a number >= 1'
    n = Math.floor(n);
    if (n === 1) {
        return 1;
    } else {
        return (n + nthTriangularNumber(n-1))
    }
}
