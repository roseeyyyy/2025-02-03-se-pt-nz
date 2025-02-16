function getResult(diceNumber) {
    if (diceNumber === 'dice6') {
        let x = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice1").innerHTML = x; 
    } else {
        let x = Math.floor(Math.random() * 10) + 1;
        document.getElementById("dice2").innerHTML = x;
    }
}
