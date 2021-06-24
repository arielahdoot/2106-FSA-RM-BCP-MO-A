// using iteration => does not tackle all sorts of nested arrays
function logsAnArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                console.log(arr[i][j]);
            }
        } else {
            console.log(arr[i]);
        }
    }
}

// recursion shines best when you're dealing with nested data types...when you don't know how nested your data type will be
// can tackle all sorts of nested arrays
function logsAnArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (Array.isArray(ele)) {
            logsAnArray(ele);
        } else {
            console.log(ele);
        }
    }
}

console.log(logsAnArray([1, [2, 3]]));
console.log(logsAnArray([1, [2, 3], [1, [2, 3, 4]]]));
console.log(logsAnArray([1, [2, 3], [1, [2, [4, 5, 6, 7, 8, 9], 3, 4]]]));
