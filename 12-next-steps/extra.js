// ternary operator

// return true if value is true return false otherwise

// if you if and else operatins have to perform `one or more actions`..
// solution 1
function testTruthy(value) {
    if (value) {
        return true;
    } else {
        return false;
    }
}

// if your if and else operations have to perform `only one action`
// solution 1.1
function testTruthy(value) {
    if (value) return true;

    return false;
}

// solution 2
function testTruthy(value) {
    return value ? true : false;
}

function testTruthy(value) {
    return value ? value : "I am not truthy";
}

function testTruthyArray(value) {
    // value should an instance of an array and have atleast one element in it
    return value ? (value.length === 1 ? value : null) : false;
}

function sortArrayByLengthASC(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

function sortArrayByLengthDESC(arr) {
    return arr.sort((a, b) => b.length - a.length);
}

console.log(sortArrayByLengthASC(["victory", "noor"]));
console.log(sortArrayByLengthDESC(["victory", "noor"]));

console.log([1, 2, 3] === "1,2,3");
