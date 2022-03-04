class Object{
	constructor(x, y, color = "white"){
		this.x = x
		this.y = y
		this.width = 1
		this.height = 1
		this.color = color
		drawRect(this.x, this.y, this.width, this.height, this.color)
		this.surface = generateSurface(this.x, this.y, this.width, this.height)
	}

	outOfBounds(x, y){			//Tests if coordinates x and y would put object out of bounds
		if((x>0)&&(x<=112)&&((x+this.width-1)<=112)&&(y>0)&&(y<=63)&&((y+this.height-1)<=63)){
			return false
		} else{
			return true
		}
	}

	setSurface(x,y){
		this.surface = generateSurface(x, y, this.width, this.height)
	}

	checkSurface(x,y){
		return generateSurface(x, y, this.width, this.height)
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