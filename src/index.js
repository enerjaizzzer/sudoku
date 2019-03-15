module.exports = function solveSudoku(matrix) {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var stalth = [];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (matrix[i][j] === 0) {
        var row = i;
        var arr = [];
        matrix[row].forEach(function (number) {
          if (number !== 0) {
            arr.push(number);
            stalth = numbers.filter(function (item, k) {
              var ok = arr.indexOf(item) === -1;
              if (ok) {
                stalth.push(i + 1);
              }
              return ok;
            }
            )

            console.log(stalth);
          }

        })

      }
    }
  }
}