
var socket = io("http://localhost:3000");

var move;
var obj;
var objj;
var current = 1;
var old_current;


socket.on('connection', function(data){
    console.log("connected");
});
$(document).ready(function() {

  randomize();


$('.btn_3d').click(function() {
    $(this).toggleClass('active');
    console.log(current);
    console.log("old current" , old_current);

    if(current === old_current)
     {
      console.log("not your turn")
    }
    else  {
      $(this).children().css("text-align", "center");
      $(this).children().css("text-align", "center");
      $(this).children().css("font-size", "50px");



      move = $(this).attr('id')

      if(repeat(move) === false){
        $(this).children().text(obj)
        objj = $(this).children().text();

        old_current = current;

        socket.emit("themove" , {move:move, obj:objj, current:current} )
      }


    }


})

  socket.on("the_move" , function(data){


    $("#"+data.move).children().css("text-align", "center");
    $("#"+data.move).children().css("text-align", "center");
    $("#"+data.move).children().css("font-size", "50px");
    $("#"+data.move).children().text(data.obj);


    if(data.obj == 'X')
    {
      obj = 'O'
    }

    else {

      obj = 'X'
    }
    old_current = data.current;



  });

  function randomize()
  {
    console.log("im here randoming")
      var rand= Math.floor((Math.random()*2));
      if(rand === 1)
      {
        obj = 'X'
      }

      else {
        obj = 'O'
      }
  }

  function repeat(cell){
    if(cell > 0 && cell < 10){
      if($("#"+cell).children().text() == 'X' ||$("#"+cell).children().text() =='O')
      {
        console.log("we here")
        return true;
      }
      else{
        return false;
      }

    }
    if(cell > 9 && cell < 19){
      if($("#"+cell).children().text() === 'X' ||$("#"+cell).children().text() ==='O')
      {
        return true;
      }
      else{
        return false;
      }

    }

    if(cell > 18 && cell < 28){
      if($("#"+cell).children().text() === 'X' ||$("#"+cell).children().text() ==='O')
      {
        return true;
      }
      else{
        return false;
      }

    }
  }


});
