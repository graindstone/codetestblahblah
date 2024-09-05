function nothings(){
  document.getElementById("text").innerHTML="Like I said, there's nothing here. Nothing but a useless button.";
  document.getElementById("button").style.display="none";
  document.getElementById("waffle").style.display="block";
}
let game = {
  waffle: 0,
  machine: 0,
}
function waffle(){
  game.waffle++;
  document.getElementById("waffleno").innerHTML="Waffles: " + game.waffle;
}
function startgame(){
  document.getElementById("text").innerHTML="Wow! Crazy!";
  document.getElementById("waffleno").style.display="block";
  waffle();
}

