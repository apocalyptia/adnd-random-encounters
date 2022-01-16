import determineHour from "../functions/determineHour.js"

export default class Encounter {

	constructor(
		day,
		monster,
		number,
		treasure
	) {
		this.day = day
		this.hour = determineHour(monster)
		this.monster = monster
		this.number = number
		this.treasure = treasure
	}

}