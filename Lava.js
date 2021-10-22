class Lava extends Coin{		//Default starting coordinates = (92,7)
	constructor(x,y){
		super()
		this.gravID
		this.defaultX = 92
		this.defaultY = 7
		this.x = x
		this.y = y
		this.width = 4
		this.height = 4
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
			let holder = 0
			for (let i = 0; i < surface[0].length; i++){
				if(!overlap(surface[0][i], this.checkSurface(this.x, this.y+1))){
					holder++
				}
			}
			if(holder == surface[0].length){
				this.move(this.x, this.y+1)
			}
			else if((lava1.x==92)&&(lava1.y==28)){
				lava1.move(92,7)
			}
		}, 125);
	}
}