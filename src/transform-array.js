module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
      throw Error();
    }
   let arrayToReturn = [];
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] == '--double-next') {
       i == arr.length - 1 ? i++ : arrayToReturn.push(arr[i + 1]);
       continue;
     } else if (arr[i] == '--double-prev') {
       if (i == 0) {
       } else {
         arrayToReturn.push(arr[i - 1]);
       }
       continue;
     } else if (arr[i] == '--discard-next') {
       i == arr.length - 1 ? i++ : i++;
       continue;
     } else if (arr[i] == '--discard-prev') {
       arrayToReturn.pop();
       continue;
     }
     arrayToReturn.push(arr[i]);
   }
    return arrayToReturn
    // remove line with error and write your code here
};
