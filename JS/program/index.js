const arr = [10, 20, 30, 40, 50];

function twoSum(array, target) {
  let output = [];
  for (let i = 0; i < array.length - 1; i++) {
    let add = 0;

    for (let j = i; j < array.length; j++) {
      add += array[j];
      if (target === add) {
        output = [i, j];
      }
    }
    if (output.length > 0) break;
  }
  return output[0] === output[1] ? 0 : output;
}

console.log(twoSum(arr, 140));
