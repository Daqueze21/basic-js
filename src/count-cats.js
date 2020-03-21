module.exports = function countCats(matrix) {
  let catEars = '^^';
  
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach(function(val) {
      if (val === catEars) counter++;
    });
  }
  return counter;

};
