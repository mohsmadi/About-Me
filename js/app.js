'use strict';

let Name=prompt(' What is your name ? ');
alert ('Welcome'+ ' '+ Name + ' '+ 'to my site');
console.log(Name);
let score=0;

function questionOne(){
  let Guess1=prompt('Do you think I am Real Madrid Fans (Yes/No)? ').toLowerCase();
  if (Guess1==='yes' || Guess1==='y' || Guess1==='Yes' || Guess1==='YES' || Guess1=== 'Y'){
    alert ('You git it! I am Madridista  ');
    console.log(Guess1);
    score=score+1;
  }else if (Guess1==='no' || Guess1==='n' || Guess1==='No' || Guess1==='NO' || Guess1=== 'N'){
    alert ('Oops! Vamoooooos Real');
    console.log(Guess1);
  }else {alert('No, Nope!');
  questionOne();}}
  questionOne();

function questionTwo(){
  let Guess2=prompt(' Do you think I love Summer, (Yes/No) ?').toLowerCase();
  if (Guess2==='yes' || Guess2==='y' || Guess2==='Yes' || Guess2==='YES' || Guess2==='Y'){
    alert ('No! actully I did not ');
    console.log(Guess2);
  }else if(Guess2==='no' || Guess2==='n' || Guess2==='No' || Guess2==='NO' || Guess2=== 'N'){
    alert ('You are Amazing, I love winnter');
    console.log(Guess2);
    score=score+1;
  }else {alert('No, Nope!');
    questionTwo();}}
  questionTwo();


function questionThree(){
  let Guess3=prompt('Do you think I like Pizza ,(Yes/No)? ').toLowerCase();
  if (Guess3==='yes' || Guess3==='y' || Guess3==='Yes' || Guess3==='YES' || Guess3==='Y'){
    alert ('Yes you are Right I am a Pitzzaroooo ');
    console.log(Guess3);
    score=score+1;
  }else if(Guess3==='no' || Guess3==='n' || Guess3==='No' || Guess3==='NO' || Guess3=== 'N'){
    alert ('Nope ! You Did not Knowing me Well');
    console.log(Guess3);
  }else {alert('No, Nope!');
    questionThree();}}
questionThree();

function questionFour(){
  let Guess4=prompt(' Do you think I am Salesman   ,(Yes/No) ? ').toLowerCase();
  if (Guess4==='yes' || Guess4==='y' || Guess4==='Yes' || Guess4==='YES' || Guess4==='Y'){
    alert ('No ! I am Accountant ');
    console.log(Guess4);
  }else if(Guess4==='no' || Guess4==='n' || Guess4==='No' || Guess4==='NO' || Guess4=== 'N'){
    alert ('You are Right, I am Accountant');
    console.log(Guess4);
    score=score+1;
  }else {alert('No, Nope!!');
    questionFour();}}
questionFour();

function questionFive(){
  let Guess5=prompt(' Do you Thing Iam good Chess Player ,(Yes/No) ? ').toLowerCase();
  if (Guess5==='yes' || Guess5==='y' || Guess5==='Yes' || Guess5==='YES' || Guess5==='Y'){
    alert ('Cool! lets play it Oneday! ');
    console.log(Guess5);
    score=score+1;
  }else if(Guess5==='no' || Guess5==='n' || Guess5==='No' || Guess5==='NO' || Guess5=== 'N'){
    alert ('As you like! but here is my page if want to see it later');
    console.log(Guess5);
  }else {alert('No, Nope!!');
    questionFive();}}
questionFive();


function guessNumber (){
  let luckyNumber=9;
  let guessLucky=prompt('Guess my lucky Numbe');
  let i =0;
  guessLucky=parseInt(guessLucky);
  console.log(guessLucky);
  if (parseInt(guessLucky)===luckyNumber){
    alert('Great you got it');
    score=score+1;
  }
  while(parseInt(guessLucky)!==luckyNumber && i<3){
    alert('My Lucky Number is between 0 & 20');
    if (parseInt(guessLucky)>luckyNumber){
      alert('No! its Too High');
      console.log(guessLucky);
      guessLucky=prompt('Guess my lucky Numbe');
      if (parseInt(guessLucky)===luckyNumber){
        alert('WoooW ! You got it');
        score=score+1;
        break;
      }else{
        i++;
      }
    }else if (parseInt(guessLucky)<luckyNumber){
      alert('No! its Too Small');
      console.log(guessLucky);
     guessLucky=prompt('Guess my lucky Numbe');
      if (parseInt(guessLucky)===luckyNumber){
        alert('Great you got it');
        score=score+1;
        break;
      }else{
        i++;
      }
    }
  }
  alert('My lucky Number 9 ');
}guessNumber();
  

function favouriteSeries(){
  let aSeries=['SUITS','THE DOCTOR','DARK','VIS A VIS',];
  let y=0;
  let favouritSeries=prompt('Guess one of My Favourite Series');
  console.log(favouritSeries);
   favouritSeries=favouritSeries.toUpperCase();
  if (favouritSeries===aSeries[0] || favouritSeries===aSeries[1] || favouritSeries===aSeries[2] || favouritSeries===aSeries[3]){
    alert('Cool!! its one of My Favourits '+ favouritSeries);
     score=score+1;
  }else{
    while((favouritSeries!==aSeries[0] || favouritSeries!==aSeries[1] || favouritSeries!==aSeries[2] || favouritSeries!==aSeries[3]) && y<5){
      alert('One of them its help pepole to be Helthy');
      favouritSeries=prompt('Guess one of My Favourite Series');
      if (favouritSeries===aSeries[0] || favouritSeries===aSeries[1] || favouritSeries===aSeries[2] || favouritSeries===aSeries[3]){
        alert('Cool!! its one of My Favourits '+ favouritSeries);
       score=score+1;
      }
      console.log(favouritSeries);
      y=y+1;
    }
    alert ('Top of the a Series '+ aSeries);
  }
  } 

  favouriteSeries();
  alert('Your score is '+ score);
  alert ('YOU ARE DO IT' + ' ' + Name + ' '+ 'You Have to Watch it, Enjoy! ');

