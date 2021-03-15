
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sorted = [];
 
  if (Array.isArray(matrix) && matrix.length) {
    matrix.forEach(function(item, i) {
      if (i % 2 !== 0) {
        item.reverse();
      }
  
      item.map(function(itemInner) {
        sorted.push(itemInner);
      });
    }); 
  } 

  return sorted;
}


