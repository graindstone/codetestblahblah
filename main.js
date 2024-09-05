function updatewaffle(){
  document.getElementById("waffleno").innerHTML="Waffles: " + game.waffle + "/" + wafflemax + "(" + time.waffletime + "/sec)";
}
function nothings(){
  document.getElementById("text").innerHTML="Like I said, there's nothing here. Nothing but a useless button.";
  document.getElementById("button").style.display="none";
  document.getElementById("waffle").style.display="block";
}
let game = {
  wafflemax: 20,
  waffle: 0,
  crate: 0,
}
let time = {
  waffletime: 0,
}
function waffle(){
  game.waffle++;
  updatewaffle();
  if (game.waffle >= 20){
    document.getElementById("cratee").removeAttribute("disabled");
  }
  else if (game.waffle < 20){
    document.getElementById("cratee").setAttribute("disabled", "");
  }

}
function startgame(){
  document.getElementById("text").style.display="none";
  document.getElementById("waffleno").style.display="block";
  document.getElementById("cratee").style.display="block";
  document.getElementById("cratee").setAttribute("disabled", "");
  waffle();
}
function buycrate(){
  game.waffle -= 20;
  game.crate++;
  game.wafflemax += 5;
  document.getElementById("crateno").innerHTML="Crates: " + game.crate;
  updatewaffle();
  if (game.waffle >= 20){
    document.getElementById("cratee").removeAttribute("disabled");
  }
  else if (game.waffle < 20){
    document.getElementById("cratee").setAttribute("disabled", "");
  }

}
