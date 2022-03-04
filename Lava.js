class Lava extends Coin{		//Default starting coordinates = (92,7)
	constructor(x,y, distance = 0){
		super()
		this.gravID
		this.defaultX = x
		this.defaultY = y
		this.x = x
		this.y = y
		this.distance = distance
		this.width = 2
		this.height = 2
		this.color = "red"
		drawRect(this.x, this.y, this.width, this.height, this.color)
		let x1 = this.x
		let y1 = this.y
		let x2 = this.x + this.width - 1
		let y2 = y1
		let x3 = x1
		let y3 = y1 + this.height - 1
		this.surface = [x1, y1, x2, y2, x3, y3]
	}
	gravity(...surface){					//Takes surfaces.. Returns false when surface is encountered and loop terminates
		this.gravID = setInterval(() => {
			if((this.distance!=0)&&(this.x==this.defaultX)&&(this.y==this.defaultY + this.distance)){
				this.move(this.defaultX, this.defaultY)
			}
			let holder = 0
			for (let i = 0; i < surface[0].length; i++){
				if(!overlap(surface[0][i], this.checkSurface(this.x, this.y+1))){
					holder++
				}
			}
			if(holder == surface[0].length){
				this.move(this.x, this.y+1)
			}
			else{		//resets when it meets an obstacle
				this.move(this.defaultX, this.defaultY)
			}
		}, 80);
	}
}