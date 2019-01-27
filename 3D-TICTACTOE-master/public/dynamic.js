exports.lobby = function(people){

  console.log("making the lobby");

  var page = `
  <html>
     <head>
        <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
        <meta charset="utf-8">
        <title>Login</title>
     </head>
     <body>
     <center>
      <form id=gamebutton action="" method="post">
        <button class="btn waves-effect waves-light teal" type="submit" name="game">Start Game</button>
     </center>

     </form>


     </body>

  <script> src = "./style.js/" </script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" >
  <link rel="stylesheet" href="/style.css"/> `

 return page;
}
