// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// p - string, word, no leading or traliing spaces, no whitespace, casing doesn't matter
// or for extra practice can sanitize 
// r - object 
// e - example 
// p 

// sanitize string, replacing any character that isn't [A-Za-z] with empty substring
// loop through string, if obj[char] is truthy, then increment, else let obj[char] = 1

const count = (str) => {
    let obj = {}
    const str2 = str.toLowerCase().replace(/[^A-Za-z]/g, '')
    for (let char of str2) {
      if (obj[char]) {
        obj[char]++
      }
      else {
        obj[char] = 1
      }
    }
    return obj
  }
  
  console.log(count('aAbcDBe4'), {a:2, b:2, c:1, d:1, e:1})
  console.log(count(''), {})
  
  function count2 (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
    },{});
  }
  // how does it know to make counts an object
  
  function count3 (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }