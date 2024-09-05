const machinebutton = document.getElementById("button");
const textline = document.getElementById("text");
const wafflebutton = document.getElementById("waffle");
const wafflenumber = document.getElementById("waffleno");

machinebutton.setAttribute("disabled", "");

function nothings(){
  textline.innerHTML="Like I said, there's nothing here. Nothing but a useless button.";
  machinebutton.style.display="none";
  waffle.style.display="block";
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
  textline.style.display="none";
  wafflenumber.style.display="block";
  waffle();
  machinebutton.style.display="block";
}

