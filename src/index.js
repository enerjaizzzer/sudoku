module.exports = function solveSudoku(matrix) {
  substitution(matrix, 0, 0);
  return matrix;
  function substitution(previousArr, row, column) {
      var pattern = [];
      for (var i = 0; i < 9; i++) {
          pattern.push( previousArr[i].slice() );
      }
      if (column > 8) {
          column = 0;
          row++;
      }

      if (pattern[row][column] === 0) {
          for (var num = 1; num < 10; num++) {
              if ( fitsRow(pattern, row, num) ) {
                  if ( fitsColumn(pattern, column, num) ) {
                      if ( fitsBlock(pattern, row, column, num) ) {
                          pattern[row][column] = num;

                          if (row === 8 && column === 8) {
                              matrix = pattern;
                          } else {
                              substitution(pattern, row, column+1);
                          }
                      }
                  }
              }
          }

      } else {
          if (row === 8 && column === 8) {
              matrix = pattern;
          } else {
              substitution(pattern, row, column+1);
          }
      }
  }

  function fitsRow(pattern, row, num) {
      for (var i = 0; i < 9; i++) {
          if (num === pattern[row][i]) return false;
      }
      return true;
  }

  function fitsColumn(pattern, column, num) {
      for (var i = 0; i < 9; i++) {
          if (num === pattern[i][column]) return false;
      }
      return true;

  }

  function fitsBlock(pattern, row, column, num) {
      var blockRow = ( Math.floor(row / 3) );
      var blockColumn = ( Math.floor(column / 3) );
      blockRow *= 3;
      blockColumn *= 3;
      for (var i = blockRow; i < (blockRow + 3); i++) {
          for (var j = blockColumn; j < (blockColumn + 3); j++) {
              if (num === pattern[i][j]) {
                  return false;
              }
          }
      }
      return true;
  }
}


//
//
//
//
//
//
//
//
//
//
//below is a solution that could not be compvared
//through checking all possible combinations
//
//
//
//
//
//
//
//


/* module.exports = function solveSudoku(matrix) {
  var result = matrix.slice();
  var circles = 9;
  res(result, circles);

  function res(result, circlesOfHell) {
    var zeroes = 0;
    var forPlanBNumbers = [];
    var forPlanBIndex = [];
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        var possibleNumbersLine = [];
        var possibleNumberscolumnumn = [];
        var possibleNumbersSquare = [];
        var possibleNumbersMass = [];
        var possibleNumbersBoxLine = [];
        var possibleNumbersBoxcolumnumn = [];
        if (result[i][j] === 0) {

          lineCheck(i);

          columnumnCheck(j);

          squareCheck(i, j);

          massCheck(result);

          boxLineCheck(i);

          boxcolumnumnCheck(j);

          possibleNumbers = possibleNumbers.filter(function (obj) {
            return possibleNumbersLine.indexOf(obj) >= 0;
          });
          possibleNumbers = possibleNumbers.filter(function (obj) {
            return possibleNumberscolumnumn.indexOf(obj) >= 0;
          });
          possibleNumbers = possibleNumbers.filter(function (obj) {
            return possibleNumbersSquare.indexOf(obj) >= 0;
          });
          if (circlesOfHell === 1) {
            console.log(forPlanBNumbers);
            console.log(forPlanBIndex);
            planB(result, forPlanBNumbers, forPlanBIndex);
            res(result);
          }
          if (possibleNumbers.length === 1) {
            result[i][j] = possibleNumbers[0];
          } else if (possibleNumbers.length <= 3) {
            forPlanBNumbers = possibleNumbers.slice();
            forPlanBIndex = [i, j];
          } else if (possibleNumbers.length <= 3 && possibleNumbersMass.length > 0 ||
            possibleNumbers.length <= 3 && possibleNumbersBoxLine.length > 0 ||
            possibleNumbers.length <= 3 && possibleNumbersBoxcolumnumn.length > 0) {

            for (var k = 0; k < possibleNumbersMass.length; k++) {
              for (var n = 0; n < possibleNumbers.length; n++) {
                if (possibleNumbers[n] === possibleNumbersMass[k] ||
                  possibleNumbers[n] === possipleNumbersBoxLine[k] ||
                  possibleNumbers[n] === possibleNumbersBoxcolumnumn[k]) {
                  result[i][j] = possibleNumbers[n];
                }
              }
            }
          } else {
            zeroes++;
          }
        }
      }
      if (i === 8 && zeroes !== 0 && circlesOfHell > 0) {
        return res(result, circlesOfHell - 1);
      }
    }

    function planB(result, numbers, index) {
      var indexI = index[0];
      var indexJ = index[1];
      var number = numbers[0]
      return ((result[indexI][indexJ]) = number);
    }

    function lineCheck(row) {
      var l = row;
      var found = false;
      var line = result.slice(l, l + 1);
      var line = [].concat.apply(line[0]);
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

    function columnumnCheck(columnumn) {
      var c = columnumn;
      var found = false;
      var column = result.map(function (value, index) { return value[c]; });
      for (var j = 1; j <= 9; j++) {
        found = false;
        for (var i = 0; i < column.length; i++) {
          if (column[i] == j) {
            found = true;
            break;
          }
        }
        if (!found) {
          possibleNumberscolumnumn.push(j);
        }
      }
      return possibleNumberscolumnumn;
    }

    function squareCheck(row, columnumn) {
      var square = [];

      if (row < 3 && columnumn < 3) {
        square.push(result[0][0], result[0][1], result[0][2],
          result[1][0], result[1][1], result[1][2],
          result[2][0], result[2][1], result[2][2]);
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

      } else if (row < 3 && columnumn >= 3 && columnumn < 6) {
        square.push(result[0][3], result[0][4], result[0][5],
          result[1][3], result[1][4], result[1][5],
          result[2][3], result[2][4], result[2][5]);
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

      } else if (row < 3 && columnumn >= 6 && columnumn < 9) {
        square.push(result[0][6], result[0][7], result[0][8],
          result[1][6], result[1][7], result[1][8],
          result[2][6], result[2][7], result[2][8]);
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

      } else if (row >= 3 && row < 6 && columnumn < 3) {
        square.push(result[3][0], result[3][1], result[3][2],
          result[4][0], result[4][1], result[4][2],
          result[5][0], result[5][1], result[5][2]);
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

      } else if (row >= 3 && row < 6 && columnumn >= 3 && columnumn < 6) {
        square.push(result[3][3], result[3][4], result[3][5],
          result[4][3], result[4][4], result[4][5],
          result[5][3], result[5][4], result[5][5]);
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

      } else if (row >= 3 && row < 6 && columnumn >= 6 && columnumn < 9) {
        square.push(result[3][6], result[3][7], result[3][8],
          result[4][6], result[4][7], result[4][8],
          result[5][6], result[5][7], result[5][8]);
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
      } else if (row >= 6 && row < 9 && columnumn < 3) {
        square.push(result[6][0], result[6][1], result[6][2],
          result[7][0], result[7][1], result[7][2],
          result[8][0], result[8][1], result[8][2]);
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
      } else if (row >= 6 && row < 9 && columnumn >= 3 && columnumn < 6) {
        square.push(result[6][3], result[6][4], result[6][5],
          result[7][3], result[7][4], result[7][5],
          result[8][3], result[8][4], result[8][5]);
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

      } else if (row >= 6 && row < 9 && columnumn >= 6 && columnumn < 9) {
        square.push(result[6][6], result[6][7], result[6][8],
          result[7][6], result[7][7], result[7][8],
          result[8][6], result[8][7], result[8][8]);
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

    function massCheck(result) {
      var mass = result.slice(0, 9);
      var mass = [].concat.apply([], mass);
      for (var k = 1; k <= 9; k++) {
        var repeat = 0;
        for (var n = 0; n < mass.length; n++) {
          if (mass[n] == k) {
            repeat++;
          }
        }
        if (repeat === 8) {
          possibleNumbersMass.push(k);
        }
      }
      return possibleNumbersMass;
    }

    function boxLineCheck(row) {
      var boxLine = [];
      if (row < 3) {
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 9; j++) {
            boxLine.push(result[i][j]);
          }
        }
        for (var k = 1; k <= 9; k++) {
          var repeat = 0;
          for (var n = 0; n < boxLine.length; n++) {
            if (boxLine[n] === k) {
              repeat++;
            }
          }
          if (repeat === 2) {
            possibleNumbersBoxLine.push(k);
          }
        }
      }
      if (row >= 3 && row < 6) {
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 9; j++) {
            boxLine.push(result[i][j]);
          }
        }
        for (var k = 1; k <= 9; k++) {
          var repeat = 0;
          for (var n = 0; n < boxLine.length; n++) {
            if (boxLine[n] === k) {
              repeat++;
            }
          }
          if (repeat === 2) {
            possibleNumbersBoxLine.push(k);
          }
        }
      }
      if (row >= 6 && row < 9) {
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 9; j++) {
            boxLine.push(result[i][j]);
          }
        }
        for (var k = 1; k <= 9; k++) {
          var repeat = 0;
          for (var n = 0; n < boxLine.length; n++) {
            if (boxLine[n] === k) {
              repeat++;
            }
          }
          if (repeat === 2) {
            possibleNumbersBoxLine.push(k);
          }
        }
      }
      return possibleNumbersBoxLine;
    }

    function boxcolumnumnCheck(columnumn) {
      var boxcolumnumn = [];
      if (columnumn < 3) {
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 9; j++) {
            boxcolumnumn.push(result[i][j]);
          }
        }
        for (var k = 1; k <= 9; k++) {
          var repeat = 0;
          for (var n = 0; n < boxcolumnumn.length; n++) {
            if (boxcolumnumn[n] === k) {
              repeat++;
            }
          }
          if (repeat === 2) {
            possibleNumbersBoxcolumnumn.push(k);
          }
        }
      }
      if (columnumn >= 3 && columnumn < 6) {
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 9; j++) {
            boxcolumnumn.push(result[i][j]);
          }
        }
        for (var k = 1; k <= 9; k++) {
          var repeat = 0;
          for (var n = 0; n < boxcolumnumn.length; n++) {
            if (boxcolumnumn[n] === k) {
              repeat++;
            }
          }
          if (repeat === 2) {
            possibleNumbersBoxcolumnumn.push(k);
          }
        }
      }
      if (columnumn >= 6 && columnumn < 9) {
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 9; j++) {
            boxcolumnumn.push(result[i][j]);
          }
        }
        for (var k = 1; k <= 9; k++) {
          var repeat = 0;
          for (var n = 0; n < boxcolumnumn.length; n++) {
            if (boxcolumnumn[n] === k) {
              repeat++;
            }
          }
          if (repeat === 2) {
            possibleNumbersBoxcolumnumn.push(k);
          }
        }
      }
    }
    return (result);
  }
  return result;
} */