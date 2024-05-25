//DEBUGGING exercise

//finding n-th power of x
function power(x, n) {
  // Replace 'x' with 1 (to avoid multiplying with x the final result again)
  var result = x; // FIX: var result = 1;
  for (let i = 0; i < n; i++) {
    // Replace 'result' after = with 'x' to obtain the correct multiplication
    result *= result; // FIX: result *= x;
  }
  return result;
}

var p = power(2, 3);

//displays: 256, should be 8
console.log(p);
