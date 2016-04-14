
var rightAnswers = 0;
var totalQuestions = 7;
var fiveQuestions = ['Was George born in Seattle?',
'Is George\'s wife named Esmerelda?',
'Has George been a coding student since highschool?',
'Does the fate of the world hang in the balance?',
  'Is George fluent in English?'];

var fiveAnswers = ['YES','NO','NO','YES','YES'];

var correctResponses = ['Yes he was born and raised in Seattle!',
'Correct. George\'s lovely wife\'s name is Kelly',
 'Correct. George has just begun this beautiful journey',
'Yes! The very fabric of space and time will be rent asunder or preserved for eternity based on the outcome of this exercise.',
'Yes he speaks English like crazy!'];

var incorrectResponses = ['Incorrect. George WAS born in Seattle',
 'No, if you read his BIO you would know her name is Kelly',
 'Wrong! He\'s just jumping on the bandwagon NOW',
 'Incorrect. You\'d be surprised.',
'Incorrect. Clearly you haven\'t been listening to his sweet, soulful baritone.'];

var userName = prompt('Hi! Let\'s get to know each other! First, please tell me your name...');
console.log('The user\'s name is ' + userName);
alert('Welcome ' + userName + '! Please answer the following questions with a "YES" or a "NO" response.');

function askFiveQuestions(){
  'use strict';
  for (var i = 0; i < 5 ; i++){
    var answer1 = prompt(fiveQuestions[i]).toUpperCase();
    if (answer1 === fiveAnswers[i][0] || answer1 === fiveAnswers[i]) {
      alert(correctResponses[i]);
      console.log('The user answered question ' + (i + 1) + ' correctly');
      rightAnswers++;
    } else {
      alert(incorrectResponses[i]);
      console.log('The user answered question ' + (i + 1) + ' incorrectly');
    }
  }
}

var guesses = 0;
function question6(){
  'use strict';
  while(guesses < 4) {
    var answer6 = prompt('How long do you think George and his wife, Kelly, have lived together (including years unmarried)? Hint: It\'s less than 20. (also, you only get 4 guesses!)');
    guesses += 1;
    if(isNaN(answer6)) {
      alert('Real smooth, wasting your guesses like that!');
    } else if(answer6 < 8) {
      console.log('Wrong answer, too low');
      alert('Too low! Guess again!');
    } else if(answer6 > 8) {
      console.log('Wrong answer, too high');
      alert('Too high! Guess again!');
    } else {
      console.log('The user guessed correctly!');
      alert('Correct! Amazing they\'ve been living together for such a long time!');
      rightAnswers++;
      break;
    }
  }
  if (guesses === 4) {
    console.log('User ran out of guesses');
  }
}

function question7(){
  'use strict';
  var correctCities = ['SEATTLE', 'SHORELINE', 'PORTLAND', 'EUGENE', 'SPRINGFIELD'];
  var attempts = 0;
  var foundOne = false;
  while(attempts < 6) {
    var answer7 = prompt('Can you guess the names of any city I\'ve lived in? (Hint: they are all West coast cities - AND you only have 6 guesses!)').toUpperCase();
    for(var i = 0; i < correctCities.length; i++) {
      console.log(attempts + ' ' + answer7);
      console.log(answer7 + ' ' + correctCities[i]);
      if(answer7 === correctCities[i]) {
        foundOne = true;
        attempts = 6;
        rightAnswers++;
        break;
      }
    }
    if (foundOne === true){
      console.log('The user answered question 6 correctly!');
      alert('Incredible, you must know George pretty well!');
      // i = correctCities.length + 1;
    }
    else {
      console.log('The user guessed question 6 incorrectly.');
      alert('Nope. He never lived there! Keep guessing!');
      attempts += 1;
    }
  }
}

function tallyAnswers(){
  'use strict';
  if(rightAnswers === totalQuestions) {
    alert('Congratulations! You answered 7 out of 7 questions correctly!');
  } else if(rightAnswers === 0) {
    alert('You didn\'t answer ANY of the questions correctly!');
  } else if(rightAnswers === 1) {
    alert('Good job getting at least one question right!');
  } else if(rightAnswers === 2) {
    alert('2 out of 7 is... ok i guess.');
  } else if(rightAnswers === 3) {
    alert('3 out of 7 correct!');
  } else if(rightAnswers === 4) {
    alert('4 out of 7 right answers, better than most!');
  } else if(rightAnswers === 5) {
    alert('5 out of 7 is great!');
  } else if(rightAnswers === 6) {
    alert('6 out of 7 correct answers!');
  }
}
askFiveQuestions();
// question1();
// question2();
// question3();
// question4();
// question5();
question6();
question7();
tallyAnswers();
alert('Thanks for playing ' + userName + '! Hope you learned something!');
