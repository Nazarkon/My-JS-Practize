let sum = function(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
    else {
      return arr.pop() + sum(arr);
    }
  };
  
  console.log(arr([1,2,3,4,5,6]));