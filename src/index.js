module.exports = function towelSort(matrix) {

  if(!matrix){
    return [];
  } else {
    matrix.forEach(function(item, index) {
      if ( (index + 1) % 2 === 0 ) {
          item.reverse();
        }
    });
  
    return matrix.reduce((prev, curr) => prev.concat(curr), []);
  }

}
