function controller(event){
	if (event.key == "w"){
		player1.jump(myStage.surface)
	}
	else if(event.key == "s"){
		player1.setSurface(player1.x, player1.y+1)
		let counter = 0
		for(let i = 0; i < myStage.surface.length; i++){
			if (!overlap(player1.surface, myStage.surface[i])&&!player1.outOfBounds(player1.x, player1.y+1)){
				counter++;
			}
		}
		if (counter == myStage.surface.length){
			player1.move(player1.x, player1.y+1)
		}
		else{
			player1.setSurface(player1.x,player1.y)
		}
	}
	else if(event.key == "a"){
		player1.setSurface(player1.x-1, player1.y)
		let counter = 0
		for(let i = 0; i < myStage.surface.length; i++){
			if (!overlap(player1.surface, myStage.surface[i])&&!player1.outOfBounds(player1.x-1, player1.y)){
				counter++;
			}
		}
		if (counter == myStage.surface.length){
			player1.move(player1.x-1, player1.y)
		}
		else{
			player1.setSurface(player1.x,player1.y)
		}
	}
	else if(event.key == "d"){
		player1.setSurface(player1.x+1, player1.y)
		let counter = 0
		for(let i = 0; i < myStage.surface.length; i++){
			if (!overlap(player1.surface, myStage.surface[i])&&!player1.outOfBounds(player1.x+1, player1.y)){
				counter++;
			}
		}
		if (counter == myStage.surface.length){
			player1.move(player1.x+1, player1.y)
		}
		else{
			player1.setSurface(player1.x,player1.y)
		}
	}
	else if(event.key == "r"){
		location.reload()
	}
}