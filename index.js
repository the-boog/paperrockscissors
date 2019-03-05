
var btnrock = document.getElementById('btnrock')
var btnpaper = document.getElementById('btnpaper')
var btnscissors = document.getElementById('btnscissors')

var wincounter = document.getElementById('wincounter')

var wins = 0
var computer = ["paper", "rock", "scissors"]

btnrock.addEventListener("click", function() {
  choice1()});

btnpaper.addEventListener("click", function() {
  choice2()});

btnscissors.addEventListener("click", function() {
  choice3()});

function choice1() {
  alert ("You have chosen rock")
  var compChoice = computer[Math.floor(Math.random()*3)]
  switch (compChoice) {
    case "paper":
    alert ("The Computer chose PAPER! HAHAHAHA! you lose!")
    losecolor ()
    setTimeout (whitecolor, 500);
    break;
    case "rock":
    alert ("The Computer chose rock as well, TIE!")
    break;
    case "scissors":
    alert ("Unfortunately the Computer chose scissors, You Win!")
    wins ++ 
    wincounter.innerHTML = wins
    wincolor ()
    setTimeout (whitecolor, 500);

  }
}

function choice2() {
  alert ("You have chosen paper, a gutsy move")
  var compChoice = computer[Math.floor(Math.random()*3)]
  switch (compChoice) {
    case "paper":
    alert ("The Computer chose paper as well, TIE!")
    break;
    case "rock":
    alert ("The Computer chose rock, good job!")
    wins ++ 
    wincounter.innerHTML = wins
    wincolor ()
    setTimeout (whitecolor, 500);
    break;
    case "scissors":
    alert ("Unfortunately the Computer chose scissors, You have lost, do not pass go, do not collect 200$, in fact, you should give the computer 200$, go ahead, just crumplet it up and insert it into your usb port.")
    losecolor ()
    setTimeout (whitecolor, 500);
  }
}

function choice3() {
  alert ("You have chosen scissors, don't run with them!")
  var compChoice = computer[Math.floor(Math.random()*3)]
  switch (compChoice) {
    case "paper":
    alert ("The Computer chose PAPER! HAHAHAHA! You Win Friend!")
    wins ++ 
    wincounter.innerHTML = wins
    wincolor ()
    setTimeout (whitecolor, 500);
    break;
    case "rock":
    alert ("The Computer chose rock, you enter a dark age.....")
    losecolor ()
    setTimeout (whitecolor, 500);
    break;
    case "scissors":
    alert ("The Computer chose scissors, its a tie!")
  }
}

function wincolor () {
  document.body.style.backgroundColor = "green"
}

function losecolor () {
  document.body.style.backgroundColor = "red"
}

function whitecolor () {
  document.body.style.backgroundColor = "white"
}
