import rollDie from "./rollDie.js";

export default function frequencyCheck(monster) {

	const freqMap = {
		"C": 12,
		"U": 4,
		"R": 2,
		"V": 1
	}

	const targetNumber = freqMap[monster.FR]

	const d20Roll = rollDie(20)

	return d20Roll <= targetNumber

}