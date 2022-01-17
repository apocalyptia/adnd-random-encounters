import TreasureMap from "../lists/TreasureMap.js"


export default function generateTreasure(monster) {

	if (monster.TT?.length) {

		const treasure = TreasureMap[monster.TT]
		
		const monsterTreasure = treasure()

		return monsterTreasure

	} else {
	
		return {}

	}

}