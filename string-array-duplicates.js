// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// string array duplicates


// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 



// prep:
// parameters -> an array of strings, never empty array? only strings? empty strings? Does casing matter?
// return -> an array of strings
// examples

// psuedocode
// create a new function, filterStr, which takes a string and removes duplicate characters
// map through arr given, and return each string element with our filterStr function applied to it
// return new array


function remDup(arr) {
  const filterStr = (str) => {
    // turn str into an arrayOfChar
    const arrOfChar = str.split('')
    // filter through arrayOfChar returning a new arrayOfNonRepChar
    const arrayOfNonRepChar = arrOfChar.filter((char, i, arrOfChar) => {
      return char !== arrOfChar[i-1]
    })
    // return a string made from arrayOfNonRepChar
    return arrayOfNonRepChar.join('')
  }

  return arr.map(string => {
    return filterStr(string)
  })
}

console.log(remDup(["abracadabra, keenness"]), ['abracadabra', 'kenes'])