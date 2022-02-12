import readlineSync from "readline-sync";

export const getRandomInt = (maxValue) => Math.floor(Math.random() * maxValue + 1);

export const sayWelcome = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};
