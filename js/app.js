'use strict';

//welcom Onboard
// let userName = prompt("Your Name ?");
// alert(" MOST WELCOME " + userName)

// // try know me!
// let questionOne= prompt ( 'Do You Like summer');
//     questionOne=questionOne.toUpperCase()
// let count_no=0
// let count_yes=0
// console.log(questionOne)
// if (questionOne==='No'|| questionOne==='N')
//    {
//     alert ('Its! Great');
//     count_no=count_no+1
//   } 
// else {   console.log( 'Oops!' );
// alert('You Dont Got It');
// count_yes=count_yes+1
// }


// let   questionTwo= prompt ( 'Do You Like Move')
//   questionTwo=questionTwo.toUpperCase()
//   if (questionTwo==='Yes'|| questionTwo==='Y')
//    {
//     console.log ('Yeah! Me Too!');
//     alert ('You Got It');
//     count_yes=count_yes+1
//   } 
// else { 
//   count_no=count_no+1
// alert('You Dont Got It');
// }


// let   questionThree= prompt ( 'Do You Like RealMadrid');
//   questionThree=questionThree.toUpperCase()

//   if (questionThree==='Yes'|| questionThree==='Y')
//    {
//     console.log ('Yeah! Me Too!');
//     alert ('You Got It');
//     count_yes=count_yes+1
//   } 
// else {   console.log( 'Oops!' );
// alert('You Dont Got It');
// count_no=count_no+1
// }


// let   questionFour= prompt ( 'Do You Like Pizza');
//   questionFour=questionFour.toUpperCase()

//   if (questionFour==='yes'|| questionFour==='y')
//    {
//     console.log ('Yeah! Me Too!');
//     alert ('You Got It');
//     count_yes=count_yes+1
    
//   } 
// else {   console.log( 'Oops!');
// alert('You Dont Got It');
// count_no=count_no+1
// }


// let   questionFive= prompt ( 'Do You Like Transportaion');
//   questionFive=questionFive.toUpperCase()
//   if (questionFive==='NO'|| questionFive==='N')
//    {
//     console.log ('Yeah! Me Too!');
//     alert ('You Got It');
//     count_no=count_no+1
//   } 
// else {   console.log( 'Oops!');
// count_yes=count_yes+1
// alert('You Dont Got It');
// }


// console.log("count_yes",count_yes)
// console.log("count_no",count_no)

//gussing Number

let guessNumber=10;
let count=0
let guestGuess1=prompt('Challenge You ! Knowing My Number....');

let i=0
while(i<4){
let x=guestGuess1
let x=temp
let guestoGuess1=x

console.log("x",x)
//    console.log(x)
//   console.log(i)
if(guestoGuess1==10){
alert("you done")
break;

} 
if (guestGuess1>10){
  alert("tooo High")
  var x=prompt('Challenge You ! Knowing My Number....');
  var temp=x
  i=i+1

}
if (guestGuess1<10){
  alert(" too small")
  var f=prompt('Challenge You ! Knowing My Number....');
  var temp=f
  i=i+1
}


console.log(x)
}

// q7

let movie=['suits','the doctor','dark','vis a vis','guest'];
let guess=0;
while(guess<6)
let movieResponse=prompt('What is the Top Movie!');
for (let i=0;i<movie.length;i++){
  if (movieResponse===movie[i]){
    alert('You get it');
    guess=6;
    userScore+=1;
    userCorrect=true;
    break;
  }
  if (guess!==7){
    movieResponse=prompt('not yet!');
  }
}
guess++;
if (guess< 6 && userCorrect===false){
  alert ('You Did not get it');
}
if (guess>6 && userCorrect===false){
  alert('Oops!')
}


}