let amountOfCards = prompt("How many cards? Choose an even number between 4 and 14");

while (amountOfCards % 2 != 0 || amountOfCards < 4 || amountOfCards > 14) {
    if (amountOfCards < 4 || amountOfCards > 14)
        amountOfCards = prompt("You must choose a number between 4 and 14! The number must also be even.");

    if (amountOfCards % 2 != 0)
        amountOfCards = prompt("You must choose an even number! The number must also be between 2 and 14.");
}

let backParrots = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
backParrots.sort(comparator);

let parrotsInTheGame = [];
for (let i = 0; i < amountOfCards / 2; i++) {
    parrotsInTheGame.push(backParrots[i]);
    parrotsInTheGame.push(backParrots[i]);
}
parrotsInTheGame.sort(comparator);

let parrotPlacer;
let turnMoves = 0;
let selectedCards;
let numberOfTurnedCards;

let cardSpace = document.querySelector(".game");
for (let i = 0; i < amountOfCards / 2; i++) {
    cardSpace.innerHTML = cardSpace.innerHTML + `
    <div class="pair flex">
        <div class="card flex" data-identifier="card" onclick=turn(this)>
            <div class="front side flex" data-identifier="front-face">
                <img class="front-parrot" src="/assets/front.png" alt="vector drawing of a parrot facing left">
            </div>
            <div class="back side flex" data-identifier="back-face">
                <img class="back-parrot" src="/assets/${placeParrot()}.gif" alt="gif of a parrot">
            </div>
        </div>
        <div class="card flex" data-identifier="card" onclick=turn(this)>
            <div class="front side flex" data-identifier="front-face">
                <img class="front-parrot" src="/assets/front.png" alt="vector drawing of a parrot facing left">
           </div>
            <div class="back side flex" data-identifier="back-face">
                <img class="back-parrot" src="/assets/${placeParrot()}.gif" alt="gif of a parrot">
            </div>
        </div>
    </div>
    `
}

function comparator() {
    return Math.random() - 0.5;
}
function placeParrot() {
    parrotPlacer = parrotsInTheGame[parrotsInTheGame.length - 1];
    parrotsInTheGame.pop();
    return parrotPlacer;
}


function turn(cardToTurn) {

    let tempDisable = document.querySelectorAll(".card");
    for(let i = 0; i < amountOfCards; i++)
    {
        tempDisable[i];
    }

    let turningTheCard = cardToTurn.querySelector(".front");
    turningTheCard.classList.add("front-turn");
    turningTheCard = cardToTurn.querySelector(".back");
    turningTheCard.classList.add("back-turn");
    cardToTurn.classList.add("recently-turned");
    turnMoves++;
    gameFlow();
}
function gameFlow() {
    selectedCards = document.querySelectorAll(".card.recently-turned");
    console.log(selectedCards);
    if(selectedCards.length == 2)
    {
        let firstCard = selectedCards[0].querySelector(".back-parrot").getAttribute('src');
        let secondCard = selectedCards[1].querySelector(".back-parrot").getAttribute('src');
        if(firstCard !== secondCard)
        {
            setTimeout(turnBack, 2000);
        }
        else
        {
            selectedCards[0].classList.remove("recently-turned");
            selectedCards[0].classList.add("previously-turned");
            selectedCards[1].classList.remove("recently-turned");
            selectedCards[1].classList.add("previously-turned");
        }
    }
    numberOfTurnedCards = document.querySelectorAll(".card.previously-turned");
    if(numberOfTurnedCards.length == amountOfCards){
        setTimeout(endGame, 500);
    }
}

function turnBack()
{
    let turnTheseBack = document.querySelectorAll(".recently-turned");
    let turningBack = turnTheseBack[0].querySelector(".front");
    turningBack.classList.remove("front-turn");
    turningBack = turnTheseBack[0].querySelector(".back");
    turningBack.classList.remove("back-turn");
    turnTheseBack[0].classList.remove("recently-turned");
    turningBack = turnTheseBack[1].querySelector(".front");
    turningBack.classList.remove("front-turn");
    turningBack = turnTheseBack[1].querySelector(".back");
    turningBack.classList.remove("back-turn");
    turnTheseBack[1].classList.remove("recently-turned");
}

function endGame()
{
    alert(`Você terminou em ${turnMoves} jogadas!`);
}