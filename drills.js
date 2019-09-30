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

// 5. String Splitter
// Write a recursive function that split a string based on a separator (similar to String.prototype.split). 
//Don't use JS array's split function to solve this problem.
// Input: 02/20/2020
// Output: 02202020

function stringSplitter (string, character) {
    if (typeof(string) !== 'string' || typeof(character) !== 'string') {
        return 'input parameters must be strings'
    } else if (string.length === 0) {
        return ''
    } else if (string[0] === character) {
        return '' + stringSplitter(string.slice(1), character)
    } else {
        return string[0] + stringSplitter(string.slice(1), character)
    }
}

// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function fibonacci (n) {
    let returnSequence = [];
    for (let i=0; i<n; i++) {
        if (i <= 1) {
            returnSequence[i] = 1;
        } else {
            returnSequence[i] = returnSequence[i-1] + returnSequence[i-2];
        }
    }
    return returnSequence;
}

function fibRecursive (n) {
    if (n<1) {
        return 0;
    } else if (n===1) {
        return 1;
    } else {
        return fibRecursive(n-1) + fibRecursive(n-2);
    }
}

function fibSequenceRecursive (n) {
    let returnSequence =[];
    for (let i=0; i<n; i++) {
        returnSequence[i] = fibRecursive(i+1)
    }

    console.log(returnSequence)
}

// 7. Factorial
// Write a recursive function that finds the factorial of a given number. 
// The factorial of a number can be found by multiplying that number by each number between itself and 1. 
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(n) {
    if (n===1) {
        return 1
    } else return (n*factorial(n-1))
}

// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. 
// There are more than one possible exit from the Maze. 
// Write a recursive function that will help you find a possible exit though the maze

// You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
// The Maze is represented as a NM matrix (in the above case, a 3X3 or a 5X7 array). 
// The starting point is the top left corner and the exit is indicated by e. 
// For simplicity purpose, use the bottom right corner of the maze as the exit. 
// You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. 
// These blocked passages are indicated by `*`. 
// Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit can be RRDDLLDDRRRRRR

function mazeSolver () {}

// 9. Find ALL the ways out of the maze
// Use the above maze and modify your solution so it finds All the possible exits through the Maze. 
// To find all possible exit through the maze, think about how many places you can move at each turn. 
// Possibly up, down, left or right?

// Notice that this maze has 3 exits. Your recursive function should print all three of the paths with the proper directions. 
// For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD

function masterMazeSolver () {}

// 10. Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order.
// Write a function that creates an anagram list, listing all the rearrangements of a given word.
// For example, if the user types "east", the program should list all 24 permutations, including "eats",
// "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words.
// For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of
// "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats",
// "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east".
// Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

function anagramList (word) {
    let returnArray=[];
    if (word.length === 1) {
        returnArray[0] = word;
    } else {
        for (let i=0; i<word.length; i++) {
            const baseLetter = word[i]
            const remaining = word.slice(0, i) + word.slice(i+1)
            const anagramsRecusive = anagramList(remaining)
            anagramsRecusive.forEach(anagram => returnArray.push(baseLetter+anagram))
        }
    }    
    return returnArray;
}

// 11. Organization Chart
// Write a recursive function that prints the following organization chart.
// Your output should be as shown below with proper indentation to show the hierarchy.
// You may store the org chart in an object and send that as an input to your program.

const heirarchy = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth:
                {
                    Steve: 'Steve',
                    Kyle: 'Kyle',
                    Andra: 'Andra',
                },
            Zhao:
                {
                    Richie: 'Richie',
                    Sofia: 'Sofia',
                    Jen: 'Jen',
                }
        },        
        Schrage: {
            VanDyck:
                {
                    Sabrina: 'Sabrina',
                    Michelle: 'Michelle',
                    Josh: 'Josh',
                },
            Swain:
                {
                    Blanch: 'Blanch',
                    Tom: 'Tom',
                    Joe: 'Joe',
                }
        },            
        Sandberg: {
            Goler:
                {
                    Eddie: 'Eddie',
                    Julie: 'Julie',
                    Annie: 'Annie',
            },
            Hernandez:
                {
                    Rowi: 'Rowi',
                    Inga: 'Inga',
                    Morgan: 'Morgan',
                },
            Moissinac:
                {
                    Amy: 'Amy',
                    Chuck: 'Chuck',
                    Vinni: 'Vinni',
                },
            Kelley:
                {
                    Eric: 'Eric',
                    Ana: 'Ana',
                    Wes: 'Wes',
                },
        },
    }
}

function printHeirarchy (heirarchy, indent='') {
    for (const key in heirarchy) {
        console.log(`${indent}${key}`)
        if (typeof(heirarchy[key]) === 'object') {
            printHeirarchy(heirarchy[key], indent+'   ')
        } 
    }
}

// 12. Binary Representation
// Write a recursive function that prints out the binary representation of a given number.
// For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output.
// Note that the binary representation of 0 should be 0.

function toBinary (n) {
    if (n===0) {
        return 0
    } else if (n===1) {
        return 1
    } else {
        let x = 1;
        while (2**x <= n) {
            x++
        }
        x--;
        return 10**(x) + toBinary(n-2**x)
    }
}

function toBinaryString (n) {
    console.log(toBinary(n).toString())
}

