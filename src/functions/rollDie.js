export default function rollDie(die) {

	let total = 0

	if (typeof die === 'number') {

		total = Math.ceil(Math.random() * die)
	
	} else if (typeof die === 'string' && die.length === 1) {

		total = parseInt(die)

	} else if (typeof die === 'string' && die.length > 1) {

		const splitOnD = die.split("d")

		const dieCount = parseInt(splitOnD[0])

		let dieType = 0

		let dieMod = 0

		if (die.includes("+")) {

			dieType = parseInt(splitOnD[1].split("+")[0])

			dieMod = parseInt(splitOnD[1].split("+")[1])

		} else {

			dieType = parseInt(splitOnD[1])

		}

		let dieResult = 0

		for (let i = 0; i < dieCount; i++) {

			const randomRoll = rollDie(dieType)

			dieResult += randomRoll

		}

		total = dieResult + dieMod

	}

	return total
	
}