function evenAndOdd(arr) {
  let even = [];
  let odd = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return [even, odd];
}

function arrayFlattener1(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (Array.isArray(ele)) {
      flat.push(...ele);
    } else {
      flat.push(ele);
    }
  }
  return flat;
}

function arrayFlattener2(arr) {
  return arr.flat();
}

function zooInventory1(arr) {
  let sentences = [];
  for (let i = 0; i < arr.length; i++) {
    const animalName = arr[i][0];
    const type = arr[i][1][0];
    const age = arr[i][1][1];
    sentences.push(`${animalName} the ${type} is ${age}.`);
  }
  return sentences;
}

function zooInventory2(arr) {
  let sentences = [];
  for (let i = 0; i < arr.length; i++) {
    const animalName = arr[i][0];
    const type = arr[i][1][0];
    const age = arr[i][1][1];
    sentences.push(
      animalName + " " + "the" + " " + type + " " + "is " + age + "."
    );
  }
  return sentences;
}

function makeGrid(cols, rows) {
  let grid = [];
  let row = [];
  for (let i = 1; i <= cols; i++) {
    row.push(i);
  }
  for (let i = 1; i <= rows; i++) {
    grid.push(row);
  }
  return grid;
}
