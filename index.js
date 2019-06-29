function findMinAndRemove(array) {
  let minValue = array[0];
  let index = 0;
  for (let i in array) {
    if (array[i] < minValue) {
      minValue = array[i];
      index = i;
    }
  }
  array.splice(index, 1);
  return minValue;
}

function insertionSort(array) {
  let newArray = [];
  let min;
  while (array.length !== 0) {
    min = findMinAndRemove(array);
    newArray.push(min);
  }
  return newArray;
}
