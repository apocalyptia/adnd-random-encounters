import createEnvironmentalMonstersList from "./createEnvironmentalMonstersList.js";
import frequencyCheck from "./frequencyCheck.js";
import generateTreasure from "./generateTreasure.js";
import numberAppearing from "./numberAppearing.js";
import Encounter from "../classes/Encounter.js";

export default function createRandomEncounter(days, environment) {

	const randomMonsterList = createEnvironmentalMonstersList(environment)

	const encounterList = []

	for (let i = 0; i < days; i++) {

		const dayOfEncounter = i

		const randomMonster = randomMonsterList[Math.floor(Math.random() * randomMonsterList.length)]

		const monsterAppears = frequencyCheck(randomMonster)

		if (monsterAppears) {

			const monsterEncounter = new Encounter(
				dayOfEncounter,
				randomMonster,
				numberAppearing(randomMonster),
				generateTreasure(randomMonster)
			)

			encounterList.push(monsterEncounter)

		}
		
	}

	return encounterList

}