let player1 = Math.floor((Math.random() * 6) + 1);
let player2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".dice1").lastElementChild.setAttribute("src",`./images/dice${player1}.png`);

document.querySelector(".dice2").lastElementChild.setAttribute("src",`./images/dice${player2}.png`);

if(player1 > player2){
    document.querySelector(".title").textContent = "Player 1 Wins!";
}else if(player1 < player2){
    document.querySelector(".title").textContent = "Player 2 Wins!";
}else{
    document.querySelector(".title").textContent = "Draw!";
}