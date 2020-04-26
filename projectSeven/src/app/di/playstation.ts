interface DicsGame {

}

class DicsFiFa implements DicsGame{

}

class DicsCar implements DicsGame{
	constructor(type: string, cost: boolean) {

	}
}

class PlayStation {
	private game: DicsGame;

	constructor(game: DicsGame){
		this.game = game;

	}
	play(){
		console.log(this.game + "...playing...");
	}
}

let fifa = new DicsFiFa();
let playStation = new PlayStation(fifa);
playStation.play();
