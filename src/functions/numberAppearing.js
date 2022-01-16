export default function numberAppearing(monster) {

	const na = monster.NA

	if (na.length === 1) {

		return parseInt(na)

	} else {

		const splitOnD = na.split("d")

		const dieCount = parseInt(splitOnD[0])

		let dieType = 0

		let dieMod = 0

		if (na.includes("+")) {

			dieType = parseInt(splitOnD[1].split("+")[0])

			dieMod = parseInt(splitOnD[1].split("+")[1])

		} else {

			dieType = parseInt(splitOnD[1])

		}

		let dieResult = 0

		for (let i = 0; i < dieCount; i++) {

			const randomRoll = Math.ceil(Math.random() * dieType)

			dieResult += randomRoll

		}

		const total = dieResult + dieMod

		return total

	}

}