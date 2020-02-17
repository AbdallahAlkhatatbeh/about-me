'use strict';

var name = prompt('what is your name ? ')
alert("welcome :"+ name +"   ");
console.log(name)



var q1= prompt('Do you think I have brothers?')
if(q1.toLocaleLowerCase() == 'yes' || q1.toLocaleLowerCase() == 'y' ){
    alert("Correct answer, go to the second question");

}else if (q1.toLocaleLowerCase() == 'no' || q1.toLocaleLowerCase() == 'n') {
    alert("Wrong answer, I have brothers ");
}

var q2= prompt('Do you think I am a sports person?')
if(q2.toLocaleLowerCase() == 'yes' || q2.toLocaleLowerCase() == 'y' ){
    alert("Correct answer, go to the third  question");

}else if (q2.toLocaleLowerCase() == 'no' || q2.toLocaleLowerCase() == 'n') {
    alert("Wrong answer, I am a sporty person  ");
}

var q3= prompt('Do you think I am a smoker?')
if(q3.toLocaleLowerCase() == 'yes' || q3.toLocaleLowerCase() == 'y' ){
    alert("Wrong answer, I am not a smoker");

}else if (q3.toLocaleLowerCase() == 'no' || q3.toLocaleLowerCase() == 'n') {
    alert("Correct answer, go to the fourth  question  ");
}

var q4= prompt('Do you think I have a beautiful voice to sing?')
if(q4.toLocaleLowerCase() == 'yes' || q4.toLocaleLowerCase() == 'y' ){
    alert("Wrong answer, I do not have a beautiful voice to sing  ");

}else if (q4.toLocaleLowerCase() == 'no' || q4.toLocaleLowerCase() == 'n') {
    alert("Correct answer, go to the Fifth    question  ");
}


var q5= prompt('Do you think I am happy with the programming?')
if(q5.toLocaleLowerCase() == 'yes' || q5.toLocaleLowerCase() == 'y' ){
    alert("Correct answer, It is the last question, thanks for your time ");

}else if (q5.toLocaleLowerCase() == 'no' || q5.toLocaleLowerCase() == 'n') {
    alert("Wrong answer, Of course I'm happy, and if I'm not happy you wouldn't find these questions  ");
}

document.write(name +' thank you for playing the game!' );










