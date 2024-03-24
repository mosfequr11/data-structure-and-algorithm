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
funBubbleSort([5, 9, 11, 4]);
