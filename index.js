
function nothings(){
  document.getElementById("text").innerHTML="Like I said, there's nothing here. Nothing but a useless button.";
  document.getElementById("waffle").style.display="block";
}
let game = {
  waffle: 0,
  machine: 0,
}
function waffle(){
  game.waffle++;
  wafflenumber.innerHTML="Waffles: " + game.waffle;
}
function startgame(){
  document.getElementById("text").style.display="none";
  document.getElementById("waffleno").style.display="block";
  waffle();
  document.getElementById("machinee").style.display="block";
}

