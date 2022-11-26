/*
 Find the average of largest and smallest numbers in an unsorted integer array?
Eg. 
Input Case 1:  
input: [1, 4, 3, 2]
output:  2.5
solution : average = (1+4)/2 =>5/2 => 2.5
 */

const arr = [1, 4, 3, 2, 4, 1, 5, 5];
arr.sort();

const smallestLargest = arr.filter(element => element === arr[0] || element === arr[arr.length - 1]);

const sumOfSmallestLargest = smallestLargest.reduce((sum, current) => sum = sum + current, 0)

const average = sumOfSmallestLargest / smallestLargest.length;
console.log(average)



