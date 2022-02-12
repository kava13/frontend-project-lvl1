#!/usr/bin/env node
import readlineSync from "readline-sync";
import { sayWelcome, getRandomInt } from "../src/index.js";

const createProgression = (firstElem, delta, elementsAmount) => {
  const progressionArr = [];

  for (let i = 0; i < elementsAmount; i++) {
    progressionArr.push(firstElem + i * delta);
  }

  return progressionArr;
};

const runGame = (name) => {
  console.log("What number is missing in the progression?");

  for (let i = 0; i < 3; i++) {
    const firstElem = getRandomInt(50);
    const delta = getRandomInt(7);
    const ELEMENTS_AMOUNT = 10;

    // const secondNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);
    const progression = createProgression(firstElem, delta, ELEMENTS_AMOUNT);

    const hiddenElemIndex = getRandomInt(ELEMENTS_AMOUNT - 1);
    const rightAnswer = String(progression[hiddenElemIndex]);
    progression[hiddenElemIndex] = "..";

    console.log(`Question: ${progression.join(" ")}`);
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
