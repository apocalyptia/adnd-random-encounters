import monsterList from "../lists/MonsterList.js"

export default function createEnvironmentalMonstersList(env) {

	if (env === "Any") {

		return monsterList

	} else {

		return monsterList.filter(m => m.EN.includes(env) || m.EN.includes("Any"))

	}
	
}