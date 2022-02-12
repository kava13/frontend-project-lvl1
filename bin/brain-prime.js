#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { sayWelcome } from '../src/index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 30;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

const name = sayWelcome();
runGame(name);
