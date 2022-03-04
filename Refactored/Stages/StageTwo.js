class StageTwo{					//Contains information about Stage One
	constructor(){
		this.surface = []
		this.lava = generateSurface(50, 45, 15, 7)
	}
	drawStageOne(){
    //Add fence with narrow elevated pass
    this.drawSolidRect(42, 1, 2, 12, "white")  //Suspended vertical beam
    this.drawSolidRect(42, 25, 2, 12, "white")  //Bottom fence

    //Add roof to left side of lava pool
    this.drawSolidRect(1, 1, 41, 1, "white")

    this.drawSolidRect(27, 19, 10, 2, "white") // Lower Beam
    this.drawSolidRect(25, 12, 2, 9, "white")  //Vault
    this.drawSolidRect(1, 11, 26, 2, "white")  //Upper beam

		this.drawSolidRect(1, 37, 45, 5, "white")		//First beam from left)
		this.drawSolidRect(45, 37, 5, 20, "white") 	//Left side of lava pit
		this.drawSolidRect(49, 52, 20, 5, "white")	//Bottom of lava pit
		this.drawSolidRect(65, 37, 5, 20, "white")	//Right side of lava pit
		drawRect(50, 45, 15, 7, "red")		//Lava
		this.drawSolidRect(70, 37, 16, 5, "white")	//Beam after pit (right side of pit)
		this.drawSolidRect(86, 32, 16, 10, "white")	//Platform on which lava falls
		this.drawSolidRect(102, 37, 11, 5, "white")	//First beam from right
		this.drawSolidRect(6, 25, 18, 4, "white") 	//Suspended Platform 

		//Overhead container for lava
		this.drawSolidRect(86, 1, 3, 7, "white")	//Left prop
		this.drawSolidRect(89, 4, 3, 7, "white")	//Left-side of funnel
		this.drawSolidRect(99, 1, 3, 7, "white")	//Right prop
		this.drawSolidRect(96, 4, 3, 7, "white")	//Right-side of funnel

		//Overhead lava store
		drawRect(89, 1, 10, 3, "red")
		drawRect(92, 4, 4, 3, "red")
	}

  drawSolidRect(x, y, width, height, color){		//Draws a rectangle with solid surfaces
    drawRect(x, y, width, height, color);
    this.surface.push(generateSurface(x, y, width, height));
  }
}