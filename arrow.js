// Arrow function with two parameters 
const sum = (firstParam, secondParam) => { 
    return firstParam + secondParam; 
  }; 
  console.log(sum(2,5)); // Prints: 7 
  
  // Arrow function with no parameters 
  const printHello = () => { 
    console.log('hello'); 
  }; 
  printHello(); // Prints: hello
  
  // Arrow functions with a single parameter 
  const checkWeight = weight => { 
    console.log(`Baggage weight : ${weight} kilograms.`); 
  }; 
  checkWeight(25); // Prints: Baggage weight : 25 kilograms.
  
  
  // Concise arrow functions
  const multiply = (a, b) => a * b; 
  console.log(multiply(2, 30)); // Prints: 60 