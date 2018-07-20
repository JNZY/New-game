var Scores, currentScore, activePlayer;

Scores = new Array(0, 0);
currentScore = 0;
activePlayer = 0;

document.getElementById('name-0').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

document.getElementById('name-1').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector(".btn-roll").addEventListener('click', function() {
	var dice;
	dice = Math.floor(Math.random()*6 + 1);

	document.querySelector("#dice").innerHTML = "<h1><center>"+dice+"</center></h1>";

	if(dice!=1) {
		currentScore += dice;
		document.querySelector("#current-" + activePlayer).innerHTML = "<h1>"+currentScore+"</h1>";
	} else {
		
		nxtPlayer();
	}
});

document.querySelector(".btn-hold").addEventListener('click', function() {
	Scores[activePlayer] += currentScore;
	document.querySelector("#score-"+activePlayer).innerHTML = "<h1>"+Scores[activePlayer]+"</h1>";

	if(Scores[activePlayer]>=100) {
		alert("Congrats Player "+activePlayer);
	} else {
		nxtPlayer();
	}
});

function nxtPlayer() {
	currentScore=0;
	document.querySelector("#current-" + activePlayer).innerHTML = "<h1>"+currentScore+"</h1>";
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}
