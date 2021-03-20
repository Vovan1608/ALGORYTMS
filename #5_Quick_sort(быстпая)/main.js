/* 
Как работает Quicksort:

1. Выберите элемент массива. Этот элемент обычно называют стержнем. 
Чаще всего этот элемент является первым или последним элементом массива.
2. Затем переставьте элементы массива так, чтобы все элементы слева от 
оси были меньше, чем точка поворота, а все элементы справа были больше, 
чем точка поворота. Шаг называется разбиением . Если элемент равен оси 
поворота, не имеет значения, с какой стороны он идет.
3. Повторите этот процесс отдельно для левой и правой стороны поворота, 
пока массив не будет отсортирован.
*/

// этап разделения:
// Здесь мы берем последний элемент в качестве стержня. Мы используем
// переменную pivotIndex, чтобы отслеживать «среднее» положение, когда
// все элементы слева меньше, а все элементы справа больше, чем pivotValue.
// На последнем этапе мы меняем местами сводную точку, которая в нашем
// случае является последним элементом, на pivotIndex. Итак, в конце концов,
// наш опорный элемент окажется в «середине». Со всеми элементами, меньшими,
// чем точка поворота, слева от нее, и всеми элементами, которые больше или
// равны оси поворота справа от нее.

function partition(arr, start, end) {
  // Берем последний элемент за pivot
  const pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // меняем элементы местами
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // идем к следующему элементу
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

  return pivotIndex;
}

// В этой функции мы начинаем с разбиения массива. После этого мы
// разделяем левый и правый подмассивы. Мы повторяем этот процесс
// до тех пор, пока метод не получит массив, который не пуст или
// имеет более одного элемента.
// Это связано с тем, что пустые массивы и массивы только с одним
// элементом считаются отсортированными.

function quickSortRecursive(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = partition(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);
}

// итеррационный вариант
function quickSortIterative(arr) {
  // Creating an array that we'll use as a stack, using the push() and pop() functions
  stack = [];

  // Adding the entire initial array as an "unsorted subarray"
  stack.push(0);
  stack.push(arr.length - 1);

  // There isn't an explicit peek() function
  // The loop repeats as long as we have unsorted subarrays
  while (stack[stack.length - 1] >= 0) {
    // Extracting the top unsorted subarray
    end = stack.pop();
    start = stack.pop();

    pivotIndex = partition(arr, start, end);

    // If there are unsorted elements to the "left" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    // If there are unsorted elements to the "right" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
}

const array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortRecursive(array, 0, array.length - 1);
console.log(array);

const ourArr = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortIterative(ourArr);

console.log(ourArr);
