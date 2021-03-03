'use strict';

let userName = prompt("Your Name ?");
alert(" MOST WELCOME " + userName)


let questionOne= prompt ( 'Do You Like summer');
    questionOne=questionOne.toUpperCase()
let count_no=0
let count_yes=0
console.log(questionOne)
if (questionOne==='No'|| questionOne==='N')
   {
    alert ('Its! Great');
    count_no=count_no+1
  } 
else {   console.log( 'Oops!' );
alert('You Dont Got It');
count_yes=count_yes+1
}


let   questionTwo= prompt ( 'Do You Like Move')
  questionTwo=questionTwo.toUpperCase()
  if (questionTwo==='Yes'|| questionTwo==='Y')
   {
    console.log ('Yeah! Me Too!');
    alert ('You Got It');
    count_yes=count_yes+1
  } 
else { 
  count_no=count_no+1
alert('You Dont Got It');
}


let   questionThree= prompt ( 'Do You Like RealMadrid');
  questionThree=questionThree.toUpperCase()

  if (questionThree==='Yes'|| questionThree==='Y')
   {
    console.log ('Yeah! Me Too!');
    alert ('You Got It');
    count_yes=count_yes+1
  } 
else {   console.log( 'Oops!' );
alert('You Dont Got It');
count_no=count_no+1
}


let   questionFour= prompt ( 'Do You Like Pizza');
  questionFour=questionFour.toUpperCase()

  if (questionFour==='yes'|| questionFour==='y')
   {
    console.log ('Yeah! Me Too!');
    alert ('You Got It');
    count_yes=count_yes+1
    
  } 
else {   console.log( 'Oops!');
alert('You Dont Got It');
count_no=count_no+1
}


let   questionFive= prompt ( 'Do You Like Transportaion');
  questionFive=questionFive.toUpperCase()
  if (questionFive==='NO'|| questionFive==='N')
   {
    console.log ('Yeah! Me Too!');
    alert ('You Got It');
    count_no=count_no+1
  } 
else {   console.log( 'Oops!');
count_yes=count_yes+1
alert('You Dont Got It');
}


console.log("count_yes",count_yes)
console.log("count_no",count_no)

