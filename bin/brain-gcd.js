#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { sayWelcome } from '../src/index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 30;

const calcGcd = (x, y) => {
  let firstNum = Math.abs(x);
  let secondNum = Math.abs(y);

  if (secondNum > firstNum) {
    const temp = firstNum;
    firstNum = secondNum;
    secondNum = temp;
  }

  while (true) {
    if (secondNum === 0) {
      return String(firstNum);
    }
    firstNum %= secondNum;
    if (firstNum === 0) {
      return String(secondNum);
    }
    secondNum %= firstNum;
  }
};

const runGame = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);
    const secondNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);

    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = calcGcd(firstNumber, secondNumber);

    if (answer === rightAnswer) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

const name = sayWelcome();
runGame(name);
