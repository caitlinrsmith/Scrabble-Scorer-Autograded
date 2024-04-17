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

let newPointStructure = transform();

function scrabbleScorer(word) {
  let points = 0;
  let wordArray = Array.from(word);
  for (let i = 0; i < wordArray.length; i++)
  {
    console.log ("Your letter is " + wordArray[i]);
    points += newPointStructure[wordArray[i].toLowerCase()];
  }

  console.log ("Your total points is " + points);
  return points;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let userWord = "";
let userScorer = "0";
function initialPrompt() {
   userWord = input.question("Let's play some Scrabble!\n \nPlease enter a word: ");
   console.log(`\n  Which scoring algorithm would you like to use?\n
   \t0 - Simple: One point per character \n
   \t1 - Vowel Bonus: Vowels are worth 3 points \n
   \t2 - Scrabble: Uses the Scrabble point system \n
   `);
   userScorer = input.question("\nEnter 0, 1, or 2:\n");
   if (userScorer === "0") {
    console.log("\nYou selected the Simple Scorer algorithm.\n");
    simpleScorer(userWord);
  }
  else if (userScorer === "1") {
    console.log("\nYou selected the Bonus Vowels algorithm.\n");
    vowelBonusScorer(userWord);
  }
  else if (userScorer === "2") {
    console.log("\nYou selected the Scrabble Scorer algorithm.\n");
    scrabbleScorer(userWord);
  }
  return userWord;
}

function simpleScorer(word) {
  if (userScorer === "0") {
  console.log(`The simple scorer gives ${word} ${word.length} point(s).\n`);}
  let score = word.length;
  return score;
}

function vowelBonusScorer(word) { 
  let points = 0;
  let i = 0;
  while ( i < word.length) {
    if (
      word[i].toLowerCase() === 'a' ||
      word[i].toLowerCase() === 'e' ||
      word[i].toLowerCase() === 'i' ||
      word[i].toLowerCase() === 'o' ||
      word[i].toLowerCase() === 'u'
    ) {
      points += 3;
      console.log("The vowel '" + userWord[i] + "' is worth: 3 points.");
      i = i + 1;
    } else {
      points += 1;
      console.log("The consonant '" + userWord[i] + "' is worth: 1 point.");
      i = i + 1;
    }
  }
  return points;
};




let scrabbleScoring = {
  'name':'Scrabble',
  'description':'The traditional scoring algorithm.',
  'scorerFunction': scrabbleScorer
};

let simpleScoring = {
  'name':'Simple Score',
  'description':'Each letter is worth 1 point.',
  'scorerFunction': simpleScorer
};
let bonusScoring = {
  'name':'Bonus Vowels',
  'description':'Vowels are 3 pts, consonants are 1 pt.',
  'scorerFunction': vowelBonusScorer
};


const scoringAlgorithms = [simpleScoring, bonusScoring, scrabbleScoring];


function scorerPrompt() {
}

function transform() {
  let tempPointStructure = {};
  for (const pointValue in oldPointStructure) {
    let letters = oldPointStructure[pointValue];
    for (let i = 0; i < letters.length; i++) {
      tempPointStructure[letters[i].toLowerCase()] = Number(pointValue);
    }
  }
  return tempPointStructure;
}

function runProgram() {
   initialPrompt();
   
}

// console.log("Scrabble scoring values for");
// console.log("letter a: ", newPointStructure.a);
// console.log("letter j: ", newPointStructure.j);
// console.log("letter z: ", newPointStructure["z"]);

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