const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// secretMessage 
const secretMessage = animals.map(animal => animal[0]);


console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// smallNumbers 
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
})