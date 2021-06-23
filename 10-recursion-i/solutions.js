// version 1
function backwardString(str) {
    if (!str.length) {
        // stop condition
        return;
    } else {
        // recursive case
        console.log(str[str.length - 1]);
        return backwardString(str.slice(0, str.length - 1));
    }
}
// version 2
function backwardString(str) {
    if (str.length === 0) {
        // stop condition
        return;
    } else {
        // recursive case
        console.log(str[str.length - 1]);
        return backwardString(str.slice(0, str.length - 1));
    }
}
// version 3
function backwardString(str) {
    // h
    if (str === "") {
        // stop condition
        return;
    } else {
        // recursive case
        console.log(str[str.length - 1]); // a
        return backwardString(str.slice(0, str.length - 1)); // backwardString(h)
    }
}

// version 4
function backwardString(str, i = 0) {
    // h
    if (i === str.length) {
        // stop condition
        return;
    } else {
        // recursive case
        console.log(str[i]); // a
        return backwardString(str, i + 1); // backwardString(h)
    }
}

// version 5
function backwardString(str) {
    // h
    let arr = str.split("");
    if (arr.length === 0) {
        // stop condition
        return;
    } else {
        // recursive case
        console.log(arr.pop()); // a
        return backwardString(arr.join("")); // backwardString(h)
    }
}

function sumNums(num) {
    if (num === 1) {
        return num;
    } else {
        return num + sumNums(num - 1);
    }
}

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    if (str.length === 0) {
        return 0;
    } else {
        let firstChar = str[0];
        if (vowels.includes(firstChar)) {
            return 1 + countVowels(str.slice(1));
        } else {
            return 0 + countVowels(str.slice(1));
        }
    }
}
