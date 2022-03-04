const table = document.getElementById("game-area")
drawGameArea();
const myStage = new StageTwo()
let coin1
let coin2
let lava1
let player1
let coins = 0
let startButton = document.getElementById("start")
let pauseButton = document.getElementById("pause")
let resumeButton = document.getElementById("resume")
let pauseText = document.getElementById("pauseText")
let displayText = document.getElementById("displayText")
pauseButton.style.visibility = "hidden"
resumeButton.style.visibility = "hidden"
pauseText.innerHTML = "DARK BLUE"
startButton.addEventListener("click", (event)=>{
	myStage.drawStageOne()
	coin1 = new Coin(11, 20)	
	coin2 = new Coin(17, 20)
	coin3 = new Coin(2, 4)
	lava1 = new Lava(93, 7)
	lava1.gravity(myStage.surface)
	lava2 = new Lava(27, 2)
	lava2.gravity(myStage.surface)
	lava3 = new Lava(57, 1, 42)
	lava3.gravity(myStage.surface)
	player1 = new Player(108,31)
	player1.gravity(myStage.surface)
	pauseText.style.visibility = "hidden"
	startButton.style.visibility = "hidden"
	pauseButton.style.visibility = "visible"
	window.addEventListener("keypress", controller)
	startGame()
})
pauseButton.addEventListener("click", (event)=>{
	pauseText.innerHTML = "PAUSED"
	pauseText.style.visibility = "visible"
	removeEventListener("keypress", controller)
	clearInterval(lava1.gravID)
	clearInterval(lava2.gravID)
	clearInterval(lava3.gravID)
	pauseButton.style.visibility ="hidden"
	resumeButton.style.visibility = "visible"
})
resumeButton.addEventListener("click", ()=>{
	window.addEventListener("keypress", controller)
	lava1.gravity(myStage.surface)
	lava2.gravity(myStage.surface)
	lava3.gravity(myStage.surface)
	pauseButton.style.visibility ="visible"
	resumeButton.style.visibility = "hidden"
	pauseText.style.visibility = "hidden"
})
function startGame(){
	let q = setInterval(() => {
		if(
			(overlap(player1.surface, lava1.surface))||
			(overlap(player1.surface, myStage.lava))||
			(overlap(player1.surface, lava2.surface))||
			(overlap(player1.surface, lava3.surface))
			){
			console.log("Theyre touching")
			pauseText.style.visibility = "visible"
			pauseText.style.color = "red"
			pauseText.innerHTML = "GAME OVER"
			player1.blink()
			clearInterval(player1.gravID)
			clearInterval(lava1.gravID)
			clearInterval(lava2.gravID)
			clearInterval(lava3.gravID)
			clearInterval(q)
			removeEventListener("keypress", controller)
			setTimeout(() => {
				location.reload()
			}, 7000);
		}
		if(overlap(player1.surface, coin1.surface)){
			clearRect(coin1.x, coin1.y, coin1.width, coin1.height)
			coin1.setSurface(0,0)
			coins++
		}
		if(overlap(player1.surface, coin2.surface)){
			clearRect(coin2.x, coin2.y, coin2.width, coin2.height)
			coin2.setSurface(0,0)
			coins++
		}
		if(overlap(player1.surface, coin3.surface)){
			clearRect(coin3.x, coin3.y, coin3.width, coin3.height)
			coin3.setSurface(0,0)
			coins++
		}
		if(coins == 3){
			clearInterval(lava1.gravID)
			clearInterval(q)
			pauseText.style.visibility = "visible"
			pauseText.style.color = "gold"
			pauseText.innerHTML = "YOU WIN"
			setTimeout(() => {
				location.replace("./happygif.mp4")
			}, 4000);
		}
	}, 100);
}

