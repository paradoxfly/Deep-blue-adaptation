class StageOne{					//Contains information about Stage One
	constructor(){
		this.surface = [									//Notation [x1, y1, x2, y2, x3, y3]
			[1, 37, 49, 37, 1, 44],					//Left floor beam
			[65, 37, 85, 37, 65, 44],				//Floor beam before lava platform
			[102, 37, 112, 37, 102, 41],		//Right floor beam
			[86, 32, 101, 32, 86, 36],			//Lava platform
			[6, 25, 23, 25, 6, 28],					//Suspended platform(left side)
			[89, 8, 91, 8, 89, 10],					//Lava left funnel
			[96, 8, 98, 8, 96, 10],					//Lava right funnel
			[86, 1, 88, 1, 86, 7],					//Lava left outer funnel
			[99, 1, 101, 1, 99, 7]
		]
		this.lava = [50, 45, 64, 45, 50, 51]
	}
	drawStageOne(){
		drawRect(1, 37, 45, 5, "white")		//First beam from left)
		drawRect(45, 37, 5, 20, "white") 	//Left side of lava pit
		drawRect(49, 52, 20, 5, "white")	//Bottom of lava pit
		drawRect(65, 37, 5, 20, "white")	//Right side of lava pit
		drawRect(50, 45, 15, 7, "red")		//Lava
		drawRect(70, 37, 16, 5, "white")	//Beam after pit (right side of pit)
		drawRect(86, 32, 16, 10, "white")	//Platform on which lava falls
		drawRect(102, 37, 11, 5, "white")	//First beam from right
		drawRect(6, 25, 18, 4, "white") 	//Suspended Platform 

		//Overhead container for lava
		drawRect(86, 1, 3, 7, "white")	//Left prop
		drawRect(89, 4, 3, 7, "white")	//Left-side of funnel
		drawRect(99, 1, 3, 7, "white")	//Right prop
		drawRect(96, 4, 3, 7, "white")	//Right-side of funnel

		//Overhead lava store
		drawRect(89, 1, 10, 3, "red")
		drawRect(92, 4, 4, 3, "red")
	}
}