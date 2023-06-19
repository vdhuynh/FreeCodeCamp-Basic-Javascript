// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return []; // Base case: Return an empty array if n is less than 1
  } else {
    const countArray = countdown(n - 1); // Recursive call with n-1
    countArray.unshift(n); // Add current value of n to the beginning of the array
    return countArray; // Return the updated array
  }
}

// Only change code above this line
