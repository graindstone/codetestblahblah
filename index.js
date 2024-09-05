function nothings(){
  document.getElementById("text").style.display="none";
  document.getElementById("text").innerHTML="Like I said, there's nothing here. Nothing but a useless button.";
  document.getElementById("text").style.display="block";
  document.getElementById("button").style.display="none";
  document.getElementById("waffle").style.display="block";
}
let game = {
  waffle: 0,
  machine: 0,
}
function waffle(){
  game.waffle++;
}
function startgame(){
  document.getElementById("text").style.display="none";
  document.getElementById("text").innerHTML="Wow! Crazy!";
  document.getElementById("text").style.display="block";
  waffle();
}

