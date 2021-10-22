function drawGameArea(){				//Draws my makeshift table-based canvas
	for(let x = 1; x <= 63; x++){
		let row = document.createElement("tr")
		for (let y = 1; y <= 112; y++){
			let column = document.createElement("td")
			row.appendChild(column)
		}
		table.appendChild(row)
	}
	console.log(table)
	console.log(table.children)
	console.log(table.children[0].children)
}

function drawRect(x, y, width, height, color){
	let tempX = x - 1;
	let tempY = y - 1;
	let tempHeight = tempY + height
	let tempWidth = tempX + width
	for(let i = tempY; i < tempHeight; i++){
		for(let j = tempX; j < tempWidth; j++){
			table.children[i].children[j].style.backgroundColor = color;
		}
	}
}

function clearRect(x, y, width, height){
	let tempX = x - 1;
	let tempY = y - 1;
	let tempHeight = tempY + height
	let tempWidth = tempX + width
	for(let i = tempY; i < tempHeight; i++){
		for(let j = tempX; j < tempWidth; j++){
			table.children[i].children[j].style.backgroundColor = "rgb(0,100,180)";
		}
	}
}

