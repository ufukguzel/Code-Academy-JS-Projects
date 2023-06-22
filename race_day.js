var raceNumber = Math.floor(Math.random() * 1000);
var isRegisteredEarly = true;
var age = 19;
var isAdult = age >= 18;

if (isAdult && isRegisteredEarly) {
  raceNumber += 1000;
  console.log("Your race is at 9:30 am. Your race number is: " + raceNumber);
} else if (isAdult && !isRegisteredEarly) {
  console.log("Your race is at 11:00 am. Your race number is: " + raceNumber);
} else {
  console.log("Your race is at 12:30 pm. Your race number is: " + raceNumber);
}
