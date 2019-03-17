module.exports = function solveSudoku(matrix) {
  var result = matrix.slice();
  res(result);
  function res(result) {
    var zeroes = 0;
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        var possibleNumbersLine = [];
        var possibleNumbersColumn = [];
        var possibleNumbersSquare = [];
        if (result[i][j] === 0) {

          lineCheck(i);
          //// alert(possibleNumbersLine);
          columnCheck(j);
          //// alert(possibleNumbersColumn);
          squareCheck(i, j);
          possibleNumbers = possibleNumbers.filter(function (obj) {
            return possibleNumbersLine.indexOf(obj) >= 0;
          });
          possibleNumbers = possibleNumbers.filter(function (obj) {
            return possibleNumbersColumn.indexOf(obj) >= 0;
          });
          possibleNumbers = possibleNumbers.filter(function (obj) {
            return possibleNumbersSquare.indexOf(obj) >= 0;
          });

          //// alert(possibleNumbers);
          if (possibleNumbers.length = 1) {
            result[i][j] = possibleNumbers[0];
            //// alert(result[i][j]);
          } else {
            zeroes++;
          }
        }
      }
      if (i === 9 && zeroes !== 0) {
        return res(result);
      }
    }


    function lineCheck(row) {
      var l = row;
      var found = false;
      var line = result.slice(l, l + 1);
      var line = [].concat.apply(line[0]);
      //// alert(line)
      for (var j = 1; j <= 9; j++) {
        found = false;
        for (var i = 0; i < line.length; i++) {
          if (line[i] == j) {
            found = true;
            break;
          }
        }
        if (!found) {
          possibleNumbersLine.push(j);

        }
      }
      return possibleNumbersLine;
    }

    function columnCheck(column) {
      var c = column;
      var found = false;
      var col = result.map(function (value, index) { return value[c]; });
      for (var j = 1; j <= 9; j++) {
        found = false;
        for (var i = 0; i < col.length; i++) {
          if (col[i] == j) {
            found = true;
            break;
          }
        }
        if (!found) {
          possibleNumbersColumn.push(j);
        }
      }
      return possibleNumbersColumn;
    }

    function squareCheck(row, column) {
      var square = [];

      if (row < 3 && column < 3) {
        square.push(result[0][0], result[0][1], result[0][2],
          result[1][0], result[1][1], result[1][2],
          result[2][0], result[2][1], result[2][2]);
       // alert(square);
        for (var j = 1; j <= 9; j++) {
          found = false;
          for (var i = 0; i < square.length; i++) {
            if (square[i] == j) {
              found = true;
              break;
            }
          }
          if (!found) {
            possibleNumbersSquare.push(j);
          }
        }
        return possibleNumbersSquare;

      } else if (row < 3 && column >= 3 && column < 6) {
        square.push(result[0][3], result[0][4], result[0][5],
          result[1][3], result[1][4], result[1][5],
          result[2][3], result[2][4], result[2][5]);
       // alert(square);
        for (var j = 1; j <= 9; j++) {
          found = false;
          for (var i = 0; i < square.length; i++) {
            if (square[i] == j) {
              found = true;
              break;
            }
          }
          if (!found) {
            possibleNumbersSquare.push(j);
          }
        }
        return possibleNumbersSquare;

      } else if (row < 3 && column >= 6 && column < 9) {
        square.push(result[0][6], result[0][7], result[0][8],
          result[1][6], result[1][7], result[1][8],
          result[2][6], result[2][7], result[2][8]);
       // alert(square);
        for (var j = 1; j <= 9; j++) {
          found = false;
          for (var i = 0; i < square.length; i++) {
            if (square[i] == j) {
              found = true;
              break;
            }
          }
          if (!found) {
            possibleNumbersSquare.push(j);
          }
        }
        return possibleNumbersSquare;

      } else if (row >= 3 && row < 6 && column < 3) {
        square.push(result[3][0], result[3][1], result[3][2],
          result[4][0], result[4][1], result[4][2],
          result[5][0], result[5][1], result[5][2]);
       // alert(square);
        for (var j = 1; j <= 9; j++) {
          found = false;
          for (var i = 0; i < square.length; i++) {
            if (square[i] == j) {
              found = true;
              break;
            }
          }
          if (!found) {
            possibleNumbersSquare.push(j);
          }
        }

      } else if (row >= 3 && row < 6 && column >= 3 && column < 6) {
        square.push(result[3][3], result[3][4], result[3][5],
          result[4][3], result[4][4], result[4][5],
          result[5][3], result[5][4], result[5][5]);
       // alert(square);
        for (var j = 1; j <= 9; j++) {
          found = false;
          for (var i = 0; i < square.length; i++) {
            if (square[i] == j) {
              found = true;
              break;
            }
          }
          if (!found) {
            possibleNumbersSquare.push(j);
          }
        }

      } else if (row >= 3 && row < 6 && column >= 6 && column < 9) {
        square.push(result[3][6], result[3][7], result[3][8],
          result[4][6], result[4][7], result[4][8],
          result[5][6], result[5][7], result[5][8]);
       // alert(square);
        for (var j = 1; j <= 9; j++) {
          found = false;
          for (var i = 0; i < square.length; i++) {
            if (square[i] == j) {
              found = true;
              break;
            }
          }
          if (!found) {
            possibleNumbersSquare.push(j);
          }
        }
      } else if (row >= 6 && row < 9 && column < 3) {
        square.push(result[6][0], result[6][1], result[6][2],
          result[7][0], result[7][1], result[7][2],
          result[8][0], result[8][1], result[8][2]);
       // alert(square);
        for (var j = 1; j <= 9; j++) {
          found = false;
          for (var i = 0; i < square.length; i++) {
            if (square[i] == j) {
              found = true;
              break;
            }
          }
          if (!found) {
            possibleNumbersSquare.push(j);

          }
        }
      } else if (row >= 6 && row < 9 && column >= 3 && column < 6) {
        square.push(result[6][3], result[6][4], result[6][5],
          result[7][3], result[7][4], result[7][5],
          result[8][3], result[8][4], result[8][5]);
       // alert(square);
        for (var j = 1; j <= 9; j++) {
          found = false;
          for (var i = 0; i < square.length; i++) {
            if (square[i] == j) {
              found = true;
              break;
            }
          }
          if (!found) {
            possibleNumbersSquare.push(j);
          }
        }

      } else if (row >= 6 && row < 9 && column >= 6 && column < 9) {
        square.push(result[6][6], result[6][7], result[6][8],
          result[7][6], result[7][7], result[7][8],
          result[8][6], result[8][7], result[8][8]);
       // alert(square);
        for (var j = 1; j <= 9; j++) {
          found = false;
          for (var i = 0; i < square.length; i++) {
            if (square[i] == j) {
              found = true;
              break;
            }
          }
          if (!found) {
            possibleNumbersSquare.push(j);
          }
        }
      }
    }
  }
  //// alert(result)
  return result;
}




