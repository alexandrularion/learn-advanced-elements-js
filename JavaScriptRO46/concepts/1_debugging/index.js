function processNumbers(arr) {
  let evens = arr.filter((num) => {
    // = (assigment operator), i.e. const myVariable = "hello world";
    // == (equality operator), i.e.  2+3 == "5" (true)
    // === (strict equality operator), i.e. 2+3 === "5" (false)
    if (num % 2 === 0) {
      return num;
    }
  });

  let doubled = evens.map((num) => num * 2);

  let sum = doubled.reduce((acc, num) => acc + num, 0);

  return sum;
}

console.log(processNumbers([1, 2, 3, 4, 5, 6])); // Expected output: 24, but it will throw errors
