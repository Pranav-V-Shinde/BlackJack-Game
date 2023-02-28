let featuredPost = [
  "Pranav becomes worlds richest man!",
  "Heres how Pranav spends his millions?",
  "Know more about Pranav's recent google aquistion...",
];
//order list of items
//arrays are 0 indexed
let mySkills = [
  "html",
  "css",
  "bootstrap",
  "tailwind",
  "sass",
  "javascript",
  "react",
  "nextjs",
  "PostGreSQL",
];
console.log(mySkills[0]);
//order
console.log(mySkills[1]);
console.log(mySkills[2]);
console.log(mySkills[0]);
console.log(mySkills.length); //length is not 0 based
//array is order list - composite or complex data type
//Premitive data number , string,boolean
let myName = "Pranav Vivek Shinde";
let age = 23;
let likeCartoon = true;
let me = [myName, age, likeCartoon];
console.log(me);

let cards = [2, 3];
cards.push(5);

let chat = ["hi", "can i ask you something???", "N O No"];
let newMessage = "Why 'NO'????";
chat.push(newMessage);
console.log(chat);
chat.pop();
console.log(chat);

//
//   start        finish      step
for (let count = 0; count < 11; count = count + 2) {
  console.log(count);
}
for (count = 1; count < 21; count++) {
  console.log(count);
}
for (count = 10; count <= 20; count++) {
  console.log(count);
}

for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}
let msg = ["message1", "message2", "message3", "message4"];
//voilating DRY """Do Not Repeat Youreself""" Principle
console.log(msg[0]);
console.log(msg[1]);
console.log(msg[2]);
console.log(msg[3]);
for (let i = 0; i < msg.length; i++) {
  console.log(msg[i]);
}
let card = [3, 8, 9];
for (let i = 0; i < card.length; i++) {
  console.log(card[i]);
}

//lets play with dom
let sentence = ["hi", "my", "name", "is", "pranav"];
let greetingEl = document.querySelector("#greeting-el");
for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}

//difference in return and console.log in function
let bugati = 300;
let ferrari = 450;
function fastestCar() {
  if (bugati < ferrari) {
    console.log("bugati fastest");
    return bugati;
  } else if (bugati > ferrari) {
    console.log("ferrari is fastest");
    return ferrari;
  } else {
    console.log("Both are equally good!");
    return 0;
  }
}
let fastest = fastestCar();
console.log(fastest);
fastestCar();

let race1 = 650;
let race2 = 900;
function totalRaceTime() {
  console.log(race1 + race2);
  return race1 + race2;
}
let totalRace = totalRaceTime();
console.log(totalRace);
totalRaceTime();

//generating random number
let randomNumber = Math.random();
console.log(randomNumber);
//generates random number between 0 and 1 inclusive of 1 0 to 9.99999....
let randomDiceNumber = Math.random() * 6;
console.log(randomDiceNumber);
//range 0 to 5.999...

let flooredNo = Math.floor(5.97);
console.log(flooredNo);

let randomBetZeroSix = Math.floor(Math.random() * 6) + 1;
console.log(randomBetZeroSix);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log("a");
for (let i = 1; i < 11; i++) {
  console.log(rollDice());
}

//nested if and logical operators
let hasCompletedCourse = true;
let hasGivenExam = true;

if (hasCompletedCourse === true) {
  if (hasGivenExam === true) {
    generateCertificate();
  }
} else {
  console.log(`no certificate`);
}

function generateCertificate() {
  console.log("Generating Certificate");
}

if (hasCompletedCourse === true && hasGivenExam === true) {
  console.log(`boy take youre certificate`);
  generateCertificate();
} else {
  console.log(`sorry! youre not eligible`);
}

let hasSolvedChallenge = false;
let hasLeftHint = false;

if (hasSolvedChallenge === false && hasLeftHint === false) {
  showSolution();
} else {
  console.log(`Try using hints!`);
}

function showSolution() {
  console.log(`Heres youre solution`);
}

let hasCSDegree = true;
let hasKnowledge = true;
if (hasCSDegree === true || hasKnowledge === true) {
  selected();
} else {
  console.log(`Requirements not met`);
}

function selected() {
  console.log("Welcome to our company!");
}

let likeDocumenteries = true;
let likeStartups = false;
if (likeDocumenteries === true || likeStartups === true) {
  showFyreFestivel();
} else {
  console.log(`Showing something else....`);
}

function showFyreFestivel() {
  console.log(`Netflix And Chill🍿`);
}

//objects -complex/composite datatype used to store data-indepth
//key-value pairs
let course = {
  title: "Learn CSS grid for FREE",
  lessons: 16,
  length: 1,
  creator: "Per Harald Borgen",
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};
console.log(course.isFree);
console.log(course.creator);
console.log(course.tags);

let castle = {
  name: "castle-dimetrescu",
  description: "Come meet lady dimetrescu and her 3 daughters",
  bed: {
    bedroom: 1,
    beds: 1,
  },
  guestsAllowed: false,
  charge: 150,
  activities: ["chassing", "arm-cutting", "fighting-ghouls"],
};
console.log(castle.name, castle.activities, castle.guestsAllowed);

let person = {
  name: "Pranav Vivek Shinde ",
  age: 23,
  country: "India",
};
function logData() {
  let log =
    person.name + " " + person.age + " old and lives in " + person.country;
  return log;
}
let personDetails = logData();
console.log(personDetails);

let personAge = 89;
if (personAge < 3) {
  console.log("Free ticket");
} else if (personAge >= 3 && personAge <= 17) {
  console.log("child discount");
} else if (personAge > 17 && personAge <= 28) {
  console.log("student discount!");
} else if (personAge > 28 && personAge <= 60) {
  console.log("No discount");
} else {
  console.log("Senior citizen discount!");
}

let largeCountries = ["China", "India", "US", "Russia"];
console.log("Largest countries in world:");
for (let i = 0; i < largeCountries.length; i++) {
  console.log(" - ", largeCountries[i]);
}

largeCountries = ["tahiti", "India", "US", "timbaktoo"];

console.log(largeCountries);

largeCountries.pop();
largeCountries.shift();
console.log(largeCountries);

largeCountries.push("Russia");
largeCountries.unshift("China");
console.log(largeCountries);

let day = 13;
let weekDay = "Friday";
if (day === 13 && weekDay == "Friday") {
  console.log("Its Friday the 13th 👻💀😱");
} else {
  console.log(`Relax🍻`);
}

function rockPaperSciscor() {
  let temp = Math.floor(Math.random() * 3) + 1;

  if (temp === 1) {
    return "rock";
  } else if (temp === 2) {
    return "paper";
  } else {
    return "sciscor";
  }
}
function game() {
  let player1 = rockPaperSciscor();
  let player2 = rockPaperSciscor();
  if (player1 === "rock") {
    if (player2 === "paper") {
      console.log(player1, player2, " Player 1 won");
    } else if (player2 === "sciscor") {
      console.log(player1, player2, " Player 2 won");
    } else {
      console.log("Its tie");
    }
  } else if (player1 === "paper") {
    if (player2 === "sciscor") {
      console.log(player1, player2, " Player 1 won");
    } else if (player2 === "rock") {
      console.log(player1, player2, " Player 2 won");
    } else {
      console.log("Its tie");
    }
  } else if (player1 === "sciscor") {
    if (player2 === "paper") {
      console.log(player1, player2, " Player 1 won");
    } else if (player2 === "rock") {
      console.log(player1, player2, " Player 2 won");
    } else {
      console.log("Its tie");
    }
  }
}
game();
let gameArr = ["rock", "paper", "sciscor"];
let r = gameArr[Math.floor(Math.random() * 3)];
console.log(r, " - Random Game Var");

let fruits = ["🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍎", "🍎"];
let apple = document.querySelector(".apple");
let orange = document.querySelector(".orange");
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] == "🍎") {
    apple.textContent += "🍎";
  } else {
    orange.textContent += "🍊";
  }
}
