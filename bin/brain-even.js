#!/usr/bin/env node
import readlineSync from "readline-sync";

const MIN_NUMBER = 1;
const MAX_NUMBER = 30;
export const runGame = () => {
  console.log("Answer \"yes\" if the number is even, otherwise answer \"no\"");

  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);
    const rightAnswer = number % 2 === 0 ? "yes" : "no";

    console.log(`Question: ${number}`);
    const answer = readlineSync.question("Your answer: ");
    if (answer === rightAnswer) {
      console.log("Correct!");
      if (i === 2) console.log("Congratulations!");
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log("Let's try again, Bill!");
      break;
    }
  }
};

runGame();