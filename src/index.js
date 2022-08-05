
module.exports = function towelSort (matrix) {
  if (matrix !== undefined && matrix.length !== 0) {
    matrix.forEach((subArray, index) => {    
      if (index % 2 != 0) subArray.sort((a, b) => {return b - a});
    });
    return matrix.flat();
  }
   return []
}
