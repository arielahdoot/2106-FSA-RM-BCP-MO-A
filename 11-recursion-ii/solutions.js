function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (Array.isArray(ele)) {
            sum += arraySum(ele);
        } else {
            sum += ele;
        }
    }
    return sum;
}

function allSystemsGo(obj) {
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === "boolean") {
            if (value === true) {
                continue;
            } else {
                return false;
            }
        } else {
            if (allSystemsGo(value) === true) {
                continue;
            } else {
                return false;
            }
        }
    }
    return true;
}

function theTruthCounts(arr) {
    let count = 0;
    for (const ele of arr) {
        if (Array.isArray(ele)) {
            count += theTruthCounts(ele);
        } else {
            if (ele) {
                count++;
            } else {
                continue;
            }
        }
    }
    return count;
}

// greedy approach
function getLongestName(family) {
    let longestName = "";
    for (const name in family) {
        const value = family[name];
        if (value === null) {
            if (name.length > longestName.length) {
                longestName = name;
            } else {
                continue;
            }
        } else {
            // nested objects
            let newLongestName = getLongestName(value);
            if (newLongestName.length > longestName.length) {
                longestName = newLongestName;
            } else {
                continue;
            }
        }
    }
    return longestName;
}
