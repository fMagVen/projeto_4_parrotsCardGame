let amountOfCards = prompt("How many cards? Choose an even number between 4 and 14");

while(amountOfCards % 2 != 0 || amountOfCards < 4 || amountOfCards > 14)
{
    if(amountOfCards < 4 || amountOfCards > 14)
        amountOfCards = prompt("You must choose a number between 4 and 14! The number must also be even.");

    if(amountOfCards % 2 != 0)
        amountOfCards = prompt("You must choose an even number! The number must also be between 2 and 14.")
}

let cardSpace = document.querySelector(".game");

for(let i = 2; i <= amountOfCards; i = i + 2)
{
    cardSpace.innerHTML = cardSpace.innerHTML + `
    <div class="pair flex">
            <div class="card flex" data-identifier="card">
                <div class="front" data-identifier="front-face">
                    <img class="front-parrot" src="/assets/front.png" alt="https://www.youtube.com/watch?v=nYc09Xqy3hE">
                </div>
                <div class="back" data-identifier="back-face">

                </div>
            </div>
            <div class="card flex" data-identifier="card">
                <div class="front" data-identifier="front-face">
                    <img class="front-parrot" src="/assets/front.png" alt="https://www.youtube.com/watch?v=nYc09Xqy3hE">
                </div>
                <div class="back" data-identifier="back-face">

                </div>

            </div>
        </div>
    `
}