'use strict';

// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

function countSheep(n) {
    if (n<=0 || typeof(n) !== 'number') {
        console.log('All sheep jumped over the fence.')
    } else {
        console.log(`${n}: Another sheep jumps over the fence`)
        countSheep(n-1)
    }
}
