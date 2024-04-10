// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let userWord = "";

function initialPrompt() {
   userWord = input.question("Let's play some scrabble! Enter a word: ");
   userScorer = input.question("Which scoring algorithm would you like to use? Type 0 1 or 2.");
  console.log(oldScrabbleScorer(userWord));
  simpleScorer(userWord);
  vowelBonusScorer();
  return userWord;
}

function simpleScorer(word) {
  console.log(`The simple scorer gives ${word} ${word.length} point(s).\n`);
  return word.length;
}

function vowelBonusScorer() {
  let i = 0;
  let points = 0;

  while ( i < userWord.length) {
    if (
      userWord[i].toLowerCase() === 'a' ||
      userWord[i].toLowerCase() === 'e' ||
      userWord[i].toLowerCase() === 'i' ||
      userWord[i].toLowerCase() === 'o' ||
      userWord[i].toLowerCase() === 'u'
    ) {
      points += 3;
      console.log("The vowel '" + userWord[i] + "' is worth: 3 points.");
      i = i + 1;
    } else {
      points += 1;
      console.log("The consonant '" + userWord[i] + "' is worth: 1 point.");
      i = i + 1;
    }
    let wordArray = userWord.toUpperCase().split("");
  }
  return;
};


let scrabbleScorer;

const scoringAlgorithms = [
  {name: "Simple Score", description: "Each letter is worth 1 point.", scoringFunction: "A function with a parameter for user input that returns a score."},
  {name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scoringFunction: "A function that returns a score based on the number of vowels and consonants."},
  {name: "Scrabble", description: "The traditional scoring algorithm.", scoringFunctionn: "Uses the oldScrabbleScorer() function to determine the score for a given word."}
];

function scorerPrompt() {
  if (userScorer === 0) {
    console.log("You selected the Simple Scorer algorithm.");
  }
  else if (userScorer === 1) {
    console.log("You selected the Bonus Vowels algorithm.");
  }
  else if (userScorer === 2) {
    console.log("You selected the Scrabble Scorer algorithm.");
  }
  return;
}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};