// a fibonacci sequence is an seuqence of numbers where each number starting tfrom the third number is the result of the previous two numbers added together
// write a fn that returns an array of numbers representing a fibonacci seuqence given a startArray with the two starting numbers and the length of the desired sequence


//method 1 - while loop
const fibonacci =(startArray, length) => {
  let arr = [...startArray]
  let i = 2
  while (i < length) {
    let sum = arr[i-1] + arr[i-2]
    arr.push(sum)
    i++;

  }
  return arr
}

console.log(fibonacci([0, 1], 5), [0, 1, 1, 2, 3])



/* most solutions to fiboancci google serachers are for another variation, where the prompt is, write a function that accepts a number, n, and returns the nth number of the [standard] fibonacci sequence, standard meaning starting with 0 and 1*/