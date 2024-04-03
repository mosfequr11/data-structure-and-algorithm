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
// console.log("Original Array: ", array);
// Make sure to use slice() to create a copy of the array
// console.log("Sorted Array: ", selectionSort(array.slice()));
// console.log("Selection Sorted Array: ", selectionSort(array));

/// Insertion Sort algorithm
// Initially, the first two elements of the array are compared in insertion sort
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
      // console.log(j);
    }

    arr[j + 1] = current;
    // console.log(current);
  }

  return arr;
}

// Example usage:
const arrayin = [44, 67, 12, 56, 13];
// console.log("Original Array: ", arrayin);
// console.log("Insertion Sorted Array: ", insertionSort(arrayin));

// Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.
// In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  console.log(middle);
  const right = arr.slice(middle);
  console.log(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const arrayMerge = [8, 3, 9, 5, 1, 7, 2, 4, 6];
console.log("Original array:", arrayMerge);
const sortedArray = mergeSort(arrayMerge);
console.log("Sorted array:", sortedArray);

// Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.

// To solve the problem follow the below idea:

// First convert the array into heap data structure using heapify, then one by one delete the root node of the Max-heap and replace it with the last node in the heap and then heapify the root of the heap. Repeat this process until size of heap is greater than 1.

// Build a heap from the given input array.
// Repeat the following steps until the heap contains only one element:
// Swap the root element of the heap (which is the largest element) with the last element of the heap.
// Remove the last element of the heap (which is now in the correct position).
// Heapify the remaining elements of the heap.
// The sorted array is obtained by reversing the order of the elements in the input array.
