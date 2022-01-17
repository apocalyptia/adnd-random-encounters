<script>
	import Encounter from "../classes/Encounter.js";
	import Monster from "../classes/Monster.js"
	import createEnvironmentalMonstersList from "../functions/createEnvironmentalMonstersList.js";
	import determineHour from "../functions/determineHour.js"
	import encounterStore from "../stores/encounterStore.js";
	import environmentList from "../lists/EnvironmentList.js";
	import frequencyCheck from "../functions/frequencyCheck.js";
	import generateTreasure from "../functions/generateTreasure.js";
	import rollDie from "../functions/rollDie.js";


	const randomEncounter = () => {

		$encounterStore.list.length = 0

		const monsterMenu = createEnvironmentalMonstersList($encounterStore.environment)

		for (let i = 0; i < $encounterStore.days; i++) {

			const chanceEncounter = rollDie(100) <= $encounterStore.chance

			if (chanceEncounter) {

				const randomMonsterIndex = rollDie(monsterMenu.length)-1

				const monsterAppears = frequencyCheck(monsterMenu[randomMonsterIndex])

				if (monsterAppears) {

					const numberAppearing = rollDie(monsterMenu[randomMonsterIndex].NA)

					const encounter = new Encounter()

					encounter.day = i

					encounter.hour = determineHour(monsterMenu[randomMonsterIndex])

					for (let j = 0; j < numberAppearing; j++) {

						const randomMonster = new Monster(monsterMenu[randomMonsterIndex])

						randomMonster.TR = generateTreasure(randomMonster)

						for (let key in randomMonster.TR) {
							if (encounter.totalTreasure.hasOwnProperty(key)) {
								encounter.totalTreasure[key] += randomMonster.TR[key]
							}
						}

						encounter.monsterList.push(randomMonster)
					}

					$encounterStore.list.push(encounter)

				}

			}
			
		}

	}
</script>


<encounter-form>
	<form-input>
		<label for="environment-list">Environment: </label>
		<select id="environment-list" bind:value={$encounterStore.environment}>
			{#each environmentList as environment}
				<option value={environment}>{environment}</option>
			{/each}
		</select>
	</form-input>
	<form-input>
		<label for="day-count">Days: </label>
		<input id="day-count" type="number" bind:value={$encounterStore.days} min=1>
	</form-input>
	<form-input>
		<label for="encounter-chance">Chance: </label>
		<input id="encounter-chance" type="number" bind:value={$encounterStore.chance} min=5 max=100 step=5>%
	</form-input>
	<form-input>
		<button on:click={randomEncounter}>Random Encounter</button>
	</form-input>
</encounter-form>


<style>
	encounter-form {
		align-items: center;
		border: 1px solid #CCC;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 20px 0;
		width: 75vw;
	}
	form-input {
		margin: 10px;
	}
	button {
		border-radius: 8px;
		font-size: 12pt;
	}
</style>