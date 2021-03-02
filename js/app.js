'use strict'

let Ans;
let r = confirm("Warm Greetings!");
if (r == true) {
  Ans = "You pressed OK!";
} else {
  Ans = "You pressed Cancel!";
}

//let userName = prompt("Please enter your name", "Mohammad!");

//if (userName != 0) {
 // document.getElementById("demo").innerHTML =
 // "Hello " + userName + "! See You Around?";
//}

let YourName = prompt("What's your Namer?");

if (YourName.toLowerCase() == "scorpion") {
  alert("Wow! Great to See YOU Here!");
}

let favCare = prompt("What's Favourit Care?");

if (favCare.toLowerCase() == "scorpion") {
  alert("Wow! I like it TOO!");
}

let favPhone = prompt("What's Favourit Phone?");

if (favCare.toLowerCase() == "scorpion") {
  alert("It's So Cool!");
}




if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}