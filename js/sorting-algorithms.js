console.log("Sorting Algorithms");
// Sorting is considered to be an important concept in many programming languages as it helps us locate elements in a faster and easier manner. Sorting algorithms are a set of instructions that take an array or list as an input and arrange the items into a particular order.

// Efficiency of sorting algorithms
// · Time complexity:
// · Memory complexity:

// Bubble Sort
// Bubble sort algorithm is an algorithm that sorts the array by comparing two adjacent elements and swaps them if they are not in the intended order. Here order can be anything like increasing order or decreasing order.

//JavaScript Bubble Sort Implementation
function funBubbleSort(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// Define an array
var arr = [5, 3, 8, 1, 2];

// Call the funBubbleSort function and pass the array as an argument
var sortedArray = funBubbleSort(arr);

// Output the sorted array
// console.log(sortedArray);

//JavaScript Bubble Sort Implementation Descending order
function funBubbleSortDescending(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        // Modified condition for descending order
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Define an array
var arr = [5, 3, 8, 1, 2];

// Call the funBubbleSortDescending function and pass the array as an argument
var sortedArrayesc = funBubbleSortDescending(arr);

// Output the sorted array
// console.log(sortedArrayesc);

/// selectionSort
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log("Original Array: ", array);
console.log("Sorted Array: ", selectionSort(array.slice()));
// Make sure to use slice() to create a copy of the array
