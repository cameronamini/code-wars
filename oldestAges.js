
function twoAges(arr) {
    const sortedArr = arr.sort((a, b) => b - a)
    return [sortedArr[1], sortedArr[0]]
  }
  
  function twoOldestAges2(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }