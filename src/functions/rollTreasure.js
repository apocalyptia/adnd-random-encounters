import rollDie from "./rollDie.js";


export default function rollTreasure(
	copper,
	silver,
	gold,
	platinum,
	gems,
	jewels
) {

	const loot = {
		cp: 0,
		sp: 0,
		gp: 0,
		pp: 0,
		pg: 0,
		sg: 0,
		eg: 0,
		rg: 0,
		dg: 0,
		pj: 0,
		sj: 0,
		ej: 0,
		rj: 0,
		dj: 0
	}

	const gemstones = [
		"p",
		"s",
		"e",
		"r",
		"d"
	]

	if (copper.chance && rollDie(100) < copper.chance) {
		loot.cp = rollDie(copper.number)
	}

	if (silver.chance && rollDie(100) < silver.chance) {
		loot.sp = rollDie(silver.number)
	}

	if (gold.chance && rollDie(100) < gold.chance) {
		loot.gp = rollDie(gold.number)
	}

	if (platinum.chance && rollDie(100) < platinum.chance) {
		loot.pp = rollDie(platinum.number)
	}

	if (gems.chance && rollDie(100) < gems.chance) {
		const gem = gemstones[rollDie(gemstones.length)-1]
		loot[`${gem}g`] = rollDie(gems.number)
	}

	if (jewels.chance && rollDie(100) < jewels.chance) {
		const jewel = gemstones[rollDie(gemstones.length)-1]
		loot[`${jewel}j`] = rollDie(jewels.number)
	}

	return loot

}