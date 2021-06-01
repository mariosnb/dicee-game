// Dicee Game ver. 1.1 - Challenge
// Mariosnb 2021

function randomNumber1() {
   var dice1 = Math.floor(Math.random()*6)+1;
   var dice2 = Math.floor(Math.random()*6)+1;
   
   var randomImageSource1 = "images/dice" + dice1 + ".png";
   var randomImageSource2 = "images/dice" + dice2 + ".png";

   document.querySelector(".img1").setAttribute("src", randomImageSource1);
   document.querySelector(".img2").setAttribute("src", randomImageSource2);

   if (dice1>dice2)
   document.querySelector("h1").innerHTML= "🚩 Player 1 Wons";
   else if (dice1<dice2)
   document.querySelector("h1").innerHTML= "Player 2 Wons 🚩";
   else
   document.querySelector("h1").innerHTML= "🏳️ Draw 🏳️";
}

function diceAnimate () {
    for (let i = 1; i<7; i++) {
    setTimeout(function timer() {
        document.querySelector(".img1").setAttribute("src", "images/dice"+i+".png");
        document.querySelector(".img2").setAttribute("src", "images/dice"+i+".png");
    }, i * 50);
  }
}

function diceAudio() {
    var audio = document.getElementById("audio");
    audio.play()
}

function play() {
    diceAudio();
    diceAnimate();
    setTimeout(randomNumber1, 300);
    randomNumber1();
}
