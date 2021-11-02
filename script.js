let amountOfCards = prompt("How many cards? Choose an even number between 2 and 14");

while(amountOfCards % 2 != 0 || amountOfCards <2 || amountOfCards > 14)
{
    if(amountOfCards < 2 || amountOfCards > 14)
        amountOfCards = prompt("You must choose a number between 2 and 14! The number must also be even.");

    if(amountOfCards % 2 != 0)
        amountOfCards = prompt("You must choose an even number! The number must also be between 2 and 14.")
}