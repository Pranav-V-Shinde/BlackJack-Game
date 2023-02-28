let player = {
  name: "Pranav",
  chips: 500,
};
let cards = [];
let sum = 0;
console.log(sum);
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerCredit = document.querySelector("#player-credit");

console.log(cards);

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random === 11 || random === 12 || random === 13) {
    random = 10;
  } else if (random === 1) {
    random = 1;
  }
  return random;
}

function renderGame() {
  sumEl.textContent = "Sum : " + sum;
  cardsEl.textContent = "cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  playerCredit.textContent = player.name + ": $ " + player.chips;
  if (sum === 21) {
    hasBlackJack = true;
    message = "Woah! BlackJack , you are a jack of all trades🏴‍☠️";
    console.log(hasBlackJack);
    player.chips += 2000;
    playerCredit.textContent = player.name + ": $ " + player.chips;
  } else if (sum <= 21) {
    message = "Want to draw another card?🤔";
  } else if (sum >= 21) {
    isAlive = false;
    console.log(isAlive);
    message = "You are dead , We are logging it out 😭";
    player.chips -= 200;
    playerCredit.textContent = player.name + ": $ " + player.chips;
  }
  messageEl.innerText = message;

  //console.log(message);
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function newCard() {
  if (isAlive === true && hasBlackJack === false && sum < 21) {
    console.log("drawing third card!🙀");
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  }
}
