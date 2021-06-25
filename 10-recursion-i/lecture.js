// function countUp(startNum) {
//     // 3
//     if (startNum > 10) {
//         console.log("done!");
//     } else {
//         console.log(startNum);
//         countUp(startNum + 1); // countUp(4)
//     }
// }

// console.log(countUp(2));
// /*
//     2
//     3
//     4
//     5
//     6
//     7
//     8
//     9
//     10
// */

// 2 ^ 3 === 2 * 2 * 2

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

// // callstack
// pow(2, 3);

console.log(pow(2, 3)); // 8

// common base cases
// num => 0 or 1
// string => "" or str.length === 1
// object => {} or object has one key in it
// arrays => [] or array.length === 1
