var userName = prompt('Hi! Let\'s get to know each other! First, please tell me your name...');
console.log('The user\'s name is ' + userName);
alert('Welcome ' + userName + '! Please answer the following questions with a "YES" or a "NO" response.');

var answer1 = prompt('Was George born in Seattle?').toUpperCase();

if (answer1 === 'Y' || answer1 === 'YES') {
  alert('Yes he was born and raised in Seattle!');
  console.log('The user answered question 1 correctly');
} else {
  alert('Incorrect. George WAS born in Seattle');
  console.log('The user answered question 1 incorrectly');
}

var answer2 = prompt('Is George\'s wife named Esmerelda?').toUpperCase();

if (answer2 === 'Y' || answer2 === 'YES') {
  alert('No, if you read his BIO you would know her name is Kelly');
  console.log('The user answered question 2 incorrectly');
} else {
  alert('Correct. George\'s lovely wife\'s name is Kelly');
  console.log('The user answered question 2 correctly');
}

var answer3 = prompt('Has George been a coding student since highschool?').toUpperCase();

if (answer3 === 'Y' || answer3 === 'YES') {
  alert('Wrong! He\'s just jumping on the bandwagon NOW');
  console.log('The user answered question 3 incorrectly');
} else {
  alert('Correct. George has just begun this beautiful journey');
  console.log('The user answered question 3 correctly');
}

var answer4 = prompt('Does the fate of the world hang in the balance?').toUpperCase();
if (answer4 === 'Y' || answer4 === 'YES') {
  alert('Yes! The very fabric of space and time will be rent asunder or preserved for eternity based on the outcome of this exercise.');
  console.log('The user answered question 4 correctly');
} else {
  alert('Incorrect. You\'d be surprised.');
  console.log('The user answered question 4 incorrectly');
}

var answer5 = prompt('Is George fluent in English?');
if (answer5 === 'Y' || answer5 === 'YES') {
  alert('Yes he speaks English like crazy!');
  console.log('The user answered question 5 correctly');
} else {
  alert('Incorrect. Clearly you haven\'t been listening to his sweet, soulful baritone.');
  console.log('The user answered question 5 incorrectly');
}

var guesses = 0;

while(guesses < 4) {
  var answer6 = prompt('How long do you think George and his wife, Kelly, have lived together (including years unmarried) Hint: It\'s less than 20? (also, you only get 4 guesses!)');
  guesses += 1;
  if(isNaN(answer6)) {
    alert('Real smooth, wasting your guesses like that!');
  } else if(answer6 < 8) {
    console.log('Too low! Guess again!');
    alert('Too low! Guess again!');
  } else if(answer6 > 8) {
    console.log('Too high! Guess again!');
    alert('Too high! Guess again!');
  } else {
    console.log('The user guessed correctly!');
    alert('Correct! Amazing they\'ve been living together for such a long time!');
  }
}
