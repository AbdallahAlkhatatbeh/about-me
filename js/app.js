'use strict';

var count = 0;
var name = prompt('what is your name ? ')
    alert("welcome :" + name + "   ");
    console.log(name);
function game1() {


    var q1 = prompt('Do you think I have brothers?')
    if (q1.toLocaleLowerCase() == 'yes' || q1.toLocaleLowerCase() == 'y') {
        alert("Correct answer, go to the second question");
        count++;

    } else if (q1.toLocaleLowerCase() == 'no' || q1.toLocaleLowerCase() == 'n') {
        alert("Wrong answer, I have brothers ");
    }

    var q2 = prompt('Do you think I am a sports person?')
    if (q2.toLocaleLowerCase() == 'yes' || q2.toLocaleLowerCase() == 'y') {
        alert("Correct answer, go to the third  question");
        count++;


    } else if (q2.toLocaleLowerCase() == 'no' || q2.toLocaleLowerCase() == 'n') {
        alert("Wrong answer, I am a sporty person  ");
    }

    var q3 = prompt('Do you think I am a smoker?')
    if (q3.toLocaleLowerCase() == 'yes' || q3.toLocaleLowerCase() == 'y') {
        alert("Wrong answer, I am not a smoker");

    } else if (q3.toLocaleLowerCase() == 'no' || q3.toLocaleLowerCase() == 'n') {
        alert("Correct answer, go to the fourth  question  ");
        count++;

    }

var q4 = prompt('Do you think I have a beautiful voice to sing?')
if (q4.toLocaleLowerCase() == 'yes' || q4.toLocaleLowerCase() == 'y') {
    alert("Wrong answer, I do not have a beautiful voice to sing  ");

} else if (q4.toLocaleLowerCase() == 'no' || q4.toLocaleLowerCase() == 'n') {
    alert("Correct answer, go to the Fifth    question  ");
    count++;

}


var q5 = prompt('Do you think I am happy with the programming?')
if (q5.toLocaleLowerCase() == 'yes' || q5.toLocaleLowerCase() == 'y') {
    alert("Correct answer, It is the last question, thanks for your time ");
    count++;


} else if (q5.toLocaleLowerCase() == 'no' || q5.toLocaleLowerCase() == 'n') {
    alert("Wrong answer, Of course I'm happy, and if I'm not happy you wouldn't find these questions  ");
}
}
function game2() {
    for (let i = 0; i < 5; i++) {
        var q6 = prompt(' guess number from 1-7 ?');
        if (q6 == '4') {
            alert("correct answer");
            count++;

            break;
        } else if (q6 > 4) {
            alert("too high , try again");

        } else if (q6 < 4) {
            alert("too low , try again");

        }
    }

}
function game3() {
    var favoritefood = ['mqlobeh', 'mandi', 'mansf', 'kabab', 'shawrmh', 'kabsh'];
    var i = 0;
    for (i; i < favoritefood.length; i++) {
        var q7 = prompt(' what is my favorite food?');
        if (q7 == favoritefood[i]) {
            alert("correct answer");
            count++;
            break;
        } else {
            alert("wrong answer");

        }

    }

    if (i == favoritefood.length) {
        alert('you used all of your attempts' + favoritefood)
    }

}

var fun1= game1();
var fun2= game2();
var fun3= game3();


document.write("<p id= ruslt >" + name + " thank you ", '--- and your grade :' + count + "/7" + " </p>");










