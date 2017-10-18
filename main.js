
var villager = 0;

var farm = 0;
var food = 0;

var lumberMill = 0;
var wood = 0;

var stoneQuarry = 0;
var stone = 0;

var ironMine = 0;
var iron = 0;

var goldMine = 0;
var gold = 0;

var count = 0;


// CONSOLE
function cons(t, c) {
    var msg = t;
    var para = document.createElement('p');para.className = c;
    para.textContent = msg;
    document.getElementById("console").prepend(para);
}


// NOT ENOUGH resources
function ner() {
  cons(" - Not enough resources!", "red");
}


// ACTIONS
function chopTree() {
  wood += 5;
  document.getElementById('wood').innerHTML = "Wood: " + wood;
}


// BUILD OTHER



// BUILD GEN
function buildFood() {
  if (wood >= 50) {
    farm++;
    document.getElementById('ownedFarm').innerHTML = "Owned: " + farm;
    cons(" - Farm Built!", "food");
    wood -= 50;
    document.getElementById('wood').innerHTML = "Wood: " + wood;
  }else {
    ner();
  }
}
function buildLumber() {
  if (wood >= 100) {
    lumberMill++;
    document.getElementById('ownedLumber').innerHTML = "Owned: " + lumberMill;
    cons(" - Lumber Mill Built!", "wood");
    wood -= 100;
    document.getElementById('wood').innerHTML = "Wood: " + wood;
  }else {
    ner();
  }
}
function buildStone() {
  if (wood >= 100) {
    stoneQuarry++;
    document.getElementById('ownedStone').innerHTML = "Owned: " + stoneQuarry;
    cons(" - Stone Quarry Built!", "stone");
    wood -= 100;
    document.getElementById('wood').innerHTML = "Wood: " + wood;
  }else {
    ner();
  }
}
function buildIron() {
  if (wood >= 100) {
    ironMine++;
    document.getElementById('ownedIron').innerHTML = "Owned: " + ironMine;
    cons(" - Iron Mine Built!", "iron");
    wood -= 100;
    document.getElementById('wood').innerHTML = "Wood: " + wood;
  }else {
    ner();
  }
}
function buildGold() {
  if (wood >= 100) {
    goldMine++;
    document.getElementById('ownedGold').innerHTML = "Owned: " + goldMine;
    cons(" - Gold Mine Built!", "gold");
    wood -= 100;
    document.getElementById('wood').innerHTML = "Wood: " + wood;
  }else {
    ner();
  }
}



// ADDING RESOURCES
function addFood() {
  if (farm > 0) {
    food = food + farm;
    document.getElementById('food').innerHTML = "Food: " + food;
  }
}

function addLumber() {
  if (lumberMill > 0) {
    wood = wood + lumberMill;
    document.getElementById('wood').innerHTML = "Wood: " + wood;
  }
}

function addStone() {
  if (stoneQuarry > 0) {
    stone = stone + stoneQuarry;
    document.getElementById('stone').innerHTML = "Stone: " + stone;
  }
}

function addIron() {
  if (ironMine > 0) {
    iron = iron + ironMine;
    document.getElementById('iron').innerHTML = "Iron: " + iron;
  }
}

function addGold() {
  if (goldMine > 0) {
    gold = gold + goldMine;
    document.getElementById('gold').innerHTML = "Gold: " + gold;
  }
}


// PEOPLE
function hireVillager() {
  if (food >= 50) {
    villager += 1;
    food -= 50;
    document.getElementById('food').innerHTML = "Food: " + food;
    cons(" - Villager hired!");
    console.log(villager);
  }else {
    ner();
  }
}


// INCREMENT
window.setInterval(function(){
  count++;
  addFood();
  if (count % 3 == 0) {
    addLumber();
  }
  if (count % 9 == 0) {
    addStone();
  }
  if (count % 27 == 0) {
    addIron();
  }
  if (count % 81 == 0) {
    addGold();
  }
},1000);
