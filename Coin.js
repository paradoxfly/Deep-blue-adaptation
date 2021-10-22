class Coin{
	constructor(x, y){
		this.x = x
		this.y = y
		this.width = 2
		this.height = 2
		this.color = "gold"
			drawRect(this.x, this.y, this.width, this.height, this.color)
			let x1 = this.x
			let y1 = this.y
			let x2 = this.x + this.width - 1
			let y2 = y1
			let x3 = x1
			let y3 = y1 + this.height - 1
			this.surface = [x1, y1, x2, y2, x3, y3]
	}
	outOfBounds(x, y){			//Tests if coordinates x and y would put object out of bounds
		if((x>0)&&(x<=112)&&((x+this.width-1)<=112)&&(y>0)&&(y<=63)&&((y+this.height-1)<=63)){
			return false
		} else{
			return true
		}
	}
	setSurface(x,y){
		let x1 = x
		let y1 = y
		let x2 = x + this.width - 1
		let y2 = y1
		let x3 = x1
		let y3 = y1 + this.height - 1
		this.surface = [x1, y1, x2, y2, x3, y3]
	}
	checkSurface(x,y){
		let x1 = x
		let y1 = y
		let x2 = x + this.width - 1
		let y2 = y1
		let x3 = x1
		let y3 = y1 + this.height - 1
		return [x1, y1, x2, y2, x3, y3]
	}
	move(x, y){				
			clearRect(this.x, this.y, this.width, this.height)
			this.x = x
			this.y = y
			drawRect(this.x, this.y, this.width, this.height, this.color)
			this.setSurface(this.x, this.y)  //x and y are new coordinates
	}
	gravity(...surface){					//Takes surfaces.. Returns false when surface is encountered and loop terminates
		setInterval(() => {
			let holder = 0
			for (let i = 0; i < surface[0].length; i++){
				if(!overlap(surface[0][i], this.checkSurface(this.x, this.y+1))){
					holder++
				}
			}
			if(holder == surface[0].length){
				this.move(this.x, this.y+1)
			}
			else {
				return false
			}
		}, 125);
	}
}