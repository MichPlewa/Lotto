import inquirer from 'inquirer';

const chosenNumbers: number[] = [];

const randomNumbers: number[] = [];

const startApp = async (): Promise<void> => {
  do {
    const result = await inquirer.prompt([
      {
        name: 'number',
        type: 'input',
        message: 'Podaj liczbę: ',
      },
    ]);

    if (validateInput(result.number)) {
      chosenNumbers.push(parseInt(result.number));
    }
  } while (chosenNumbers.length < 6);

  do {
    const number: number = randomNewNumber();
    if (validateRandomNumber(number)) {
      randomNumbers.push(number);
    }
  } while (randomNumbers.length < 6);
  seeResult();
};

const validateInput = (text: string): boolean => {
  const number = parseInt(text);
  if (number >= 1 && number <= 49) {
    return true;
  } else {
    console.log('podaj poprawną liczbę');
    return false;
  }
};

const randomNewNumber = (): number => {
  return Math.floor(Math.random() * 49) + 1;
};

const validateRandomNumber = (number: number): boolean => {
  if (randomNumbers.includes(number)) {
    return false;
  }
  return true;
};

const correctNumber = (): number => {
  let i = 0;
  randomNumbers.forEach((e) => {
    if (chosenNumbers.includes(e)) {
      i++;
    }
  });
  return i;
};

const seeResult = (): void => {
  console.log(`Trafiłeś ${correctNumber()} dobrych liczb`);
};

startApp();
