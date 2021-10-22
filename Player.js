class Player extends Coin{     //Default starting coordinates (108,31)
	constructor(x,y){
		super()
		this.gravID
		this.x = x
		this.y = y
		this.width = 2
		this.height = 6
		this.color = "black"
			drawRect(this.x, this.y, this.width, this.height, this.color)
			let x1 = this.x
			let y1 = this.y
			let x2 = this.x + this.width - 1
			let y2 = y1
			let x3 = x1
			let y3 = y1 + this.height - 1
			this.surface = [x1, y1, x2, y2, x3, y3]
	}
	blink(){
		let n = 20
		setInterval(() => {
			if(n > 2){
				if (n%2 == 0){
					drawRect(this.x, this.y, this.width, this.height, "red")
				}
				else {
					drawRect(this.x, this.y, this.width, this.height, this.color)
				}
			}
			else{
				clearInterval
			}
			n--
		}, 350);
	}
	gravity(...surface){					//Takes surfaces.. Returns false when surface is encountered and loop terminates
		this.gravID = setInterval(() => {
			let holder = 0
			for (let i = 0; i < surface[0].length; i++){
				if(!overlap(surface[0][i], this.checkSurface(this.x, this.y+1))){
					holder++
				}
			}
			if(holder == surface[0].length){
				this.move(this.x, this.y+1)
			}
		}, 70);
	}
	jump(...surface){
		let jumpHeight = 18
		let holder1 = 0
		for (let j = 0; j < surface[0].length; j++){
			if((!overlap(surface[0][j], this.checkSurface(this.x, this.y+1)))){
				holder1++
			}
		}
		if (holder1 != surface[0].length){
			setInterval(() => {
				let holder = 0
				for (let i = 0; i < surface[0].length; i++){
					if((!overlap(surface[0][i], this.checkSurface(this.x, this.y-1)))){
						holder++
					}
				}
				if(jumpHeight>0){
					if(holder == surface[0].length){
						this.move(this.x, this.y-1)
					}
				}
				else{
					clearInterval
				}
				jumpHeight--
			}, 18);
		}
	}
}	