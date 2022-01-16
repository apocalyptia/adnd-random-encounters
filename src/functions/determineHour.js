export default function determineHour(monster) {

	let hour = 0

	if (monster.CY === "D") {

		hour = Math.floor(Math.random() * 12) + 8		// Diurnal = 0800 to 1900
	
	} else if (monster.CY === "N") {
	
		hour = Math.floor(Math.random() * 12) + 20		// Nocturnal = 2000 to 0700
	
		if (hour > 23) hour -= 24

	} else {
	
		hour = Math.floor(Math.random() * 24)
	
	}

	return hour

}