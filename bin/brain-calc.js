#!/usr/bin/env node
import readlineSync from "readline-sync";
import { sayWelcome } from "../src/index.js";

const MIN_NUMBER = 1;
const MAX_NUMBER = 30;

const randomNumToMathOperation = {
  1: "+",
  2: "-",
  3: "*",
};

const calc = (firstNum, secondNum, oper) => {
  let result = null;

  if (oper === "-") {
    result = firstNum - secondNum;
  }
  if (oper === "+") {
    result = firstNum + secondNum;
  }

  if (oper === "*") {
    result = firstNum * secondNum;
  }

  return String(result);
};

const runGame = (name) => {
  for (let i = 0; i < 3; i++) {
    const firstNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);
    const secondNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);

    const numForOperation = Math.floor(Math.random() * (3 - 1 + 1) + MIN_NUMBER);
    console.log("numForOperation: ", numForOperation);
    const operation = randomNumToMathOperation[numForOperation];

    const rightAnswer = calc(firstNumber, secondNumber, operation);

    console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
    const answer = readlineSync.question("Your answer: ");

    if (answer === rightAnswer) {
      console.log("Correct!");
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

const name = sayWelcome();
runGame(name);
