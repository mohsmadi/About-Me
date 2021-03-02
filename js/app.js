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

if (YourName.toLowerCase() =="Yes") {
  alert("Wow! Great to See YOU Here!");
}


let favCare = prompt("What's Favourit Care?");

if (favCare.toLowerCase() =="Yes") {
  alert("Wow! I like it TOO!");
}

let favPhone = prompt("What's Favourit Phone?");

if (favCare.toLowerCase() =="Yes") {
  alert("It's So Cool!");
}

function myFunction() {
  let greeting;
  let time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo").innerHTML = greeting;
}

let msg;
let favBook = prompt("What's your favorite Book?");
switch(favBook) {
  case "The Cold Millions":
    msg = "Excellent choice! The Cold Millions is Incredible Book.";
    break;
  case "Vesper Flights":
    msg = "Vesper Flights is my favorite as Will!";
    break;
  case "Writers & Lovers":
    msg = "Really? Are you sure the Writers & Lovers is your favorite?";
    break;
  default:
    msg = "I have never heard of that one..";
    break;
}


if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}

    // random value generated 
    var y = Math.floor(Math.random() * 10 + 1); 
      
    // counting the number of guesses 
    // made for correct Guess 
    var guess = 1; 
      
    document.getElementById("submitguess").onclick = function(){ 
      
   // number guessed by user      
   var x = document.getElementById("guessField").value; 
  
   if(x == y) 
   {     
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + guess + " GUESS "); 
   } 
   else if(x > y) /* if guessed number is greater 
                   than actual number*/ 
   {     
       guess++; 
       alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
   } 
   else
   { 
       guess++; 
       alert("OOPS SORRY!! TRY A GREATER NUMBER") 
   } 
} 