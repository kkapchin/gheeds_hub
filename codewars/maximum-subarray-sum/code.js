var maxSequence = function(arr){
    if(arr.length === 0) {
      return 0;
    } else if (arr.filter((num) => num > 0).length === 0) {
      return 0;
    } else {
      let result = arr[0];
      for(let i = 1; i < arr.length; i++) {
        arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
        result = Math.max(result, arr[i]);
      }
      return result;
    }
}
