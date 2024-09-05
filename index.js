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
  document.getElementById("text").style.display="none";
  document.getElementById("waffleno").style.display="block";
  document.getElementById("machinee").style.display="block";
  document.getElementById("machinee").setAttribute("disabled", "");
  waffle();
}
for (var i=0; i<Infinity; i++) {
  if (game.waffle >= 20){
    document.getElementById("machinee").removeAttribute("disabled");
  }
  else if (game.waffle < 20){
    document.getElementById("machinee").setAttribute("disabled", "");
}
