alert('Hi! Let\'s play a guessing game about me! Please answer each\
question with a "Y" or an "N"');

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
