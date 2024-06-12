let gameData;
if(localStorage.getItem("gameData"))
    gameData = JSON.parse(localStorage.getItem("gameData"));
else
    gameData = {
        currentText: -1,
        winCount: 0,
        loseCount: 0,
        meme: true
    };

nextText();
document.querySelector(".loseCount").innerHTML = gameData.loseCount;
document.querySelector(".winCount").innerHTML = gameData.winCount;

var winBtn = document.querySelector(".winBtn");
var loseBtn = document.querySelector(".loseBtn");

var btnSize = window.innerWidth>600?200:100;

winBtn.style.borderLeftWidth= btnSize/2+"px";
winBtn.style.borderRightWidth= btnSize/2+"px";
winBtn.style.borderBottomWidth= btnSize+"px";

loseBtn.style.width= btnSize+"px";
loseBtn.style.height= btnSize+"px";
loseBtn.style.marginLeft= btnSize/2+"px";

const winSound = new Audio('win.wav');
winBtn.onclick = function(){
	winSound.pause();
	winSound.currentTime = 0;
	winSound.play();
    gameData.winCount += 1;
    document.querySelector(".winCount").innerHTML = gameData.winCount;
    nextText();
}

const loseSound = new Audio('lose.wav');
loseBtn.onclick = function(){
	loseSound.pause();
	loseSound.currentTime = 0;
	loseSound.play();
    gameData.loseCount += 1;
    document.querySelector(".loseCount").innerHTML = gameData.loseCount;
    nextText();
}

function nextText(){
    localStorage.setItem("gameData", JSON.stringify(gameData));
    if(gameData.currentText < texts.length - 1)
    {
		if(gameData.currentText > 151 && gameData.winCount==69 && gameData.meme){
        	document.querySelector(".text").innerHTML = "nice";
			gameData.meme = false;
		}
		else{
        	gameData.currentText += 1;
        	document.querySelector(".text").innerHTML = texts[gameData.currentText];
		}
    }
}

function restart(){
	gameData.currentText=-1;
	nextText();
	gameData.meme = true;
    gameData.winCount = 0;
    gameData.loseCount = 0;
    document.querySelector(".loseCount").innerHTML = gameData.loseCount;
    document.querySelector(".winCount").innerHTML = gameData.winCount;
    localStorage.setItem("gameData", JSON.stringify(gameData));
}
