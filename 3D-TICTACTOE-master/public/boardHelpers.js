exports.createArray = function createArray(length) {
  var arr = new Array(length || 0),
  i = length;
  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while(i--) arr[length-1 - i] = createArray.apply(this, args);
  }
return arr;}
exports.initArray = function initArray(arr){
  for(var i = 0; i< 3; i++){
    for(var j = 0; j<3; j++){
      arr[i][j][0] = -1;
      arr[i][j][1] = -1;
      arr[i][j][2] = -1;
    }
  }
}
exports.numberToIndex =  function numberToIndex(number){
    var retArr = [0,0,-1];
    if(number > 9){
      if(number <= 18){
        retArr[0] = 1;
        number = number - 9;
      }
      else{
        retArr[0] = 2;
        number = number - 18;
      }
    }
    if(number > 3){
      if(number <= 6){
        retArr[1] = 1;
        number = number - 3;
      }
      else{
        retArr[1] = 2;
        number = number - 6;
      }
    }
    retArr[2] = number - 1;
    return retArr;
  }
  exports.check3Dboard = function check3Dboard(board){
    var ret = -1;
    for(var i = 0; i < 3; i++){
      check2Dboard(board[i]) != -1? ret = check2Dboard(board[i]) : console.log("No winner on flat board "+ i)
    }
    console.log("Now checking str8 downwards .. ");
    checkStraightDown(board) != -1? ret = checkStraightDown(board): console.log("No winner on 3d str8 down");
    console.log("Now checking 3d diagonals...");
    checkDiagonals3D(board) != -1? ret = checkDiagonals3D(board): console.log("No winner on 3d diagonals");

    return ret;

  }
  function checkDiagonals3D(board) {
    var ret = -1;
    var sum;
    //000 sliding down...
    for(var i = 0; i< 3; i++){
      if(board[0][0][i] != -1 && board[1][1][i] != -1 && board[2][2][i] != -1){
        sum = board[0][0][i] + board[1][1][i] + board[2][2][i];
        (sum == 3 || sum == 0)? ret = sum: console.log("no winner at " + i + "sliding down");
      }
      if(board[0][2][i] != -1 && board[1][1][i] != -1 && board[2][0][i] != -1){
        sum = board[0][2][i] + board[1][1][i] + board[2][0][i];
        (sum == 3 || sum == 0)? ret = sum: console.log("no winner at " + i + "sliding UP");
      }
      if(board[0][i][0] != -1 && board[1][i][1] != -1 && board[2][i][2] != -1){
        sum = board[0][i][0] + board[1][i][1] + board[2][i][2];
        (sum == 3 || sum == 0)? ret = sum: console.log("no winner at " + i + "sliding SIDEWAYS left");
      }
      if(board[0][i][2] != -1 && board[1][i][1] != -1 && board[2][i][0] != -1){
        sum = board[0][i][2] + board[1][i][1] + board[2][i][0];
        (sum == 3 || sum == 0)? ret = sum: console.log("no winner at " + i + "sliding SIDEWAYS right");
      }
    }
      //XDiag
    if(board[0][0][0] != -1 && board[1][1][1] != -1 && board[2][2][2] != -1){
      sum = board[0][0][0] +board[1][1][1] +board[2][2][2];
      (sum == 3 || sum == 0)? ret = sum: console.log("no 3d diag winner 1/4");
    }
    if(board[0][0][2] != -1 && board[1][1][1] != -1 && board[2][2][0] != -1){
      sum = board[0][0][2] + board[1][1][1] + board[2][2][0];
      (sum == 3 || sum == 0)? ret = sum: console.log("no 3d diag winner 2/4");
    }
    if(board[0][2][0] != -1 && board[1][1][1] != -1 && board[2][0][2] != -1){
      sum = board[0][2][0] + board[1][1][1] + board[2][0][2];
      (sum == 3 || sum == 0)? ret = sum: console.log("no 3d diag winner 3/4");
    }
    if(board[0][2][2] != -1 && board[1][1][1] != -1 && board[2][0][0] != -1){
      sum = board[0][2][2] + board[1][1][1] + board[2][0][0];
      (sum == 3 || sum == 0)? ret = sum: console.log("no 3d diag winner 4/4");
    }
    return ret;
  }
  function checkStraightDown(board) {
    var ret = -1;
    for(var i =0; i< 3; i++){
      for(var j = 0 ; j < 3; j++){
        if(board[0][j][i] != -1 && board[1][j][i] != -1 && board[2][j][i] != -1){
          var sum = board[0][j][i] + board[1][j][i] + board[2][j][i];
          (sum == 3 || sum == 0)? ret = sum: console.log("no winner at " + i + "str8 down");
        }
      }
    }
    return ret;

  }
  function check2Dboard(board){
    var ret = -1;
    for(var i = 0; i< 3; i++){
      (checkRow(board[i]) != -1)? ret = checkRow(board[i]) : console.log("no winner in row");
      (checkColumn(board, i) != -1)? ret = checkColumn(board,i): console.log("no winner in col");
    }
    checkDiagonals(board) != -1? ret = checkDiagonals(board) : console.log("no winner in diags");
    return ret;
  }
  function checkDiagonals(board){
    var ret = -1;
    if(board[0][0] == -1 || board[1][1] == -1 || board[2][2] == -1){
      if(board[0][2] != -1 && board[2][0] != -1){
        var sum = board[0][2] + board[1][1] + board[2][0];
        (sum == 3 || sum == 0)? ret = board[1][1]: ret = -1;
        return ret;
      }
      var sum = board[0][0] + board[1][1] +board[2][2];
      (sum == 3 || sum == 0)? ret = board[1][1]: ret = -1;
      return ret;
    }
  }

  function checkRow(row){
    if(row[0] == -1 || row [1] == -1 || row [2] == -1){
      return -1;
    }
    if((row[0] + row[1] + row[2]) == 3){
      return 1;
    }
    else if((row[0] + row[1] + row[2]) == 0){
      return 0;
    }
    else{
      return -1;
    }
  }
function checkColumn(board, column){
    if(board[0][column] == -1 || board[1][column] == -1 || board[2][column] == -1){
      return -1;
    }
    if((board[0][column] + board[1][column] + board[2][column]) == 3){
      return 1;
    }
    else if((board[0][column] + board[1][column] + board[2][column]) == 0){
      return 0;
    }
    else{
      return -1;
    }
}
