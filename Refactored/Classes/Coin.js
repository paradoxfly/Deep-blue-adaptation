class Coin extends Object{
	constructor(x, y){
		this.x = x
		this.y = y
		this.width = 2
		this.height = 2
		this.color = "gold"
		drawRect(this.x, this.y, this.width, this.height, this.color)
		this.surface = generateSurface(this.x, this.y, this.width, this.height)
	}
}