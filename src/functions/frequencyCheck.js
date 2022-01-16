export default function frequencyCheck(monster) {

	const freqMap = {
		"C": 12,
		"U": 4,
		"R": 2,
		"V": 1
	}

	const targetNumber = freqMap[monster.FR]

	const d20Roll = Math.floor(Math.random() * 20)

	return d20Roll <= targetNumber

}