let container=document.getElementById('container');
let question=document.getElementById('question');
let option1=document.getElementById('option1');
let option2=document.getElementById('option2');
let option3=document.getElementById('option3');
let option4=document.getElementById('option4');

let btnNext= document.querySelector('.btnNext');

const quizArray=[
    ["what is the smallest country in world?","vatican","monaco","nauru","tuvalu","vatican"],
    ["what is the largest planet in our solar system?","jupiter","earth","saturn","ploto","jupiter"]

]
let currentIndex=0;

const newQuestion = function (index) {
currentIndex++;
if(index<quizArray.length){
question.innerHTML=quizArray[index][0];
option1.innerHTML=quizArray[index][2];
option2.innerHTML=quizArray[index][3];
option3.innerHTML=quizArray[index][4];
option4.innerHTML=quizArray[index][5];
}
else{
    question.innerHTML="Quiz successfully completed";
    option1.innerHTML="";
option2.innerHTML="";
option3.innerHTML="";
option4.innerHTML="";

}
}
 newQuestion(currentIndex);

btnNext.onclick= () => {
// index++;
newQuestion(currentIndex);
    
// question.innerHTML=quizArray[index][0];
// option1.innerHTML=quizArray[index][2];
// option2.innerHTML=quizArray[index][3];
// option3.innerHTML=quizArray[index][4];
// option4.innerHTML=quizArray[index][5];
}


