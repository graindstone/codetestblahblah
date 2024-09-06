function updatewaffle(){
  document.getElementById("waffleno").innerHTML="Waffles: " + game.waffle + "/" + game.wafflemax + " (" + time.waffletime + "/sec)";
  if (game.waffle < game.wafflemax){
    document.getElementById("waffleno").style.color="black";
  }
  else{
    document.getElementById("waffleno").style.color="GoldenRod";
  }
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
  costcrate: 20,
  crate_effect: 3,
}
let time = {
  waffletime: 0,
}
function waffle(){
  if (game.waffle < game.wafflemax){
    game.waffle++;
  }
  updatewaffle();
  if (game.waffle >= game.costcrate){
    document.getElementById("cratee").removeAttribute("disabled");
  }
  else if (game.waffle < game.costcrate){
    document.getElementById("cratee").setAttribute("disabled", "");
  }

}
function startgame(){
  document.getElementById("title").innerHTML="Cool Waffle Game";
  document.getElementById("text").style.display="none";
  document.getElementById("waffleno").style.display="block";
  document.getElementById("cratee").style.display="block";
  document.getElementById("cratee").setAttribute("disabled", "");
  waffle();
  document.getElementById("cratecost").style.cisplay="block";
  document.getElementById("cratecost").innerHTML="Crate cost: " + game.costcrate;
}
function buycrate(){
  game.waffle -= game.costcrate;
  game.crate++;
  game.wafflemax += game.crate_effect;
  game.crate_effect *= 1.87;
  game.crate_effect = Math.ceil(game.crate_effect);
  document.getElementById("crateno").innerHTML="Crates: " + game.crate;
  updatewaffle();
  if (game.waffle >= game.costcrate){
    document.getElementById("cratee").removeAttribute("disabled");
  }
  else if (game.waffle < game.costcrate){
    document.getElementById("cratee").setAttribute("disabled", "");
  }
  game.costcrate *= 1.085
  game.costcrate = Math.ceil(game.costcrate);
  document.getElementById("cratecost").innerHTML="Crate cost: " + game.costcrate;
}
