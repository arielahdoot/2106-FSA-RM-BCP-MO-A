// algorithms

// helpers
function getRow(puzzle, rowIdx) {
  return puzzle[rowIdx];
}

function getColumn(puzzle, colIdx) {
  let column = [];
  for (let i = 0; i < puzzle.length; i++) {
    const row = puzzle[i];
    column.push(row[colIdx]);
  }
  return column;
}
function getSection(puzzle, x, y) {
  // (1, 0)
  let section = [];
  let startRow = y * 3; // 0
  let endRow = startRow + 3; // 3
  let startColumn = x * 3; // 3
  let endColumn = startColumn + 3; // 6

  for (let i = startRow; i < endRow; i++) {
    section.push(puzzle[i].slice(startColumn, endColumn));
  }
  return section.flat();
}
function includes1to9(arr) {
  let validNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < arr.length; i++) {
    if (validNums.includes(arr[i])) {
      continue;
    } else {
      return false;
    }
  }
  return new Set(arr).size === 9;
}

// main
function sudokuIsValid(puzzle) {
  let checkArrays = [];

  for (let i = 0; i < 9; i++) {
    checkArrays.push(getRow(puzzle, i));
    checkArrays.push(getColumn(puzzle, i));
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      checkArrays.push(getSection(puzzle, i, j));
    }
  }

  for (let i = 0; i < checkArrays.length; i++) {
    if (includes1to9(checkArrays[i])) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

// extra credit
function isSame(puzzle1, puzzle2) {
  return JSON.stringify(puzzle1) === JSON.stringify(puzzle2);
}

// R E A (Helpers) C T O`...tricky = helper functions needed!!

// --------------------- tests --------------------
let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

console.log(getRow(puzzle, 8));
// -> [ 3,2,8,1,9,6,5,4,7 ]

console.log(getRow(puzzle, 0));
// -> [ 8,9,5,7,4,2,1,3,6 ]

console.log(getColumn(puzzle, 0));
// -> [ 8,2,4,9,5,6,1,7,3 ]

console.log(getColumn(puzzle, 8));
// -> [ 6,5,2,8,4,1,3,9,7 ]

console.log(getSection(puzzle, 0, 0));
// -> [ 8,9,5,2,7,1,4,6,3 ]

console.log(getSection(puzzle, 1, 0));
// -> [ 7,4,2,9,6,3,5,8,1 ]

console.log(includes1to9([1, 2, 3, 4, 5, 6, 7, 8, 9])); // => true
console.log(includes1to9([1, 1, 2, 3, 4, 5, 6, 7, 8])); // => false (no 9)
console.log(includes1to9([1, 12, 3, 4, 5, 6, 7, 8, 9])); // false

console.log(sudokuIsValid(puzzle));
// => true

let p8zzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [8, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

console.log(sudokuIsValid(p8zzle));
// => false

console.log(isSame(puzzle, puzzle)); // true
console.log(isSame(puzzle, p8zzle)); // false
