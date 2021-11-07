let amountOfCards = prompt("How many cards? Choose an even number between 4 and 14");

while(amountOfCards % 2 != 0 || amountOfCards < 4 || amountOfCards > 14)
{
    if(amountOfCards < 4 || amountOfCards > 14)
        amountOfCards = prompt("You must choose a number between 4 and 14! The number must also be even.");

    if(amountOfCards % 2 != 0)
        amountOfCards = prompt("You must choose an even number! The number must also be between 2 and 14.");
}

let backParrots = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
backParrots.sort(comparator);

let parrotsInTheGame = [];
for (let i = 0; i < amountOfCards/2; i++)
{
    parrotsInTheGame.push(backParrots[i]);
    parrotsInTheGame.push(backParrots[i]);
}
parrotsInTheGame.sort(comparator);

let parrotPlacer;

let cardSpace = document.querySelector(".game");
for(let i = 0; i < amountOfCards/2; i++)
{
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

function comparator()
{
    return Math.random() - 0.5;
}


function turn(cardToTurn)
{
    let turningTheCard = cardToTurn.querySelector(".front");
    turningTheCard.classList.add("front-turn");
    turningTheCard = cardToTurn.querySelector(".back");
    turningTheCard.classList.add("back-turn");
}

function placeParrot()
{
    parrotPlacer = parrotsInTheGame[parrotsInTheGame.length - 1];
    parrotsInTheGame.pop();
    return parrotPlacer;
}