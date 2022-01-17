<script>
	import TreasureTypeList from "../../lists/TreasureTypeList.js"

	export let encounter, number

	const monster = encounter.monsterList[number]

	console.log(monster)
</script>


{#if monster.AR.length}
	<div>Armor: {monster.AR.join(", ")}</div>
{/if}
{#if monster.GR.length}
	<div>Gear: {monster.GR.join(", ")}</div>
{/if}
{#if monster.TT.length}
	<div>Treasure:</div>
	{#each TreasureTypeList as type}
		{#if monster.TR[type]}
			<div class="treasure-row">{type.toUpperCase()}: {monster.TR[type]}</div>
		{/if}
	{/each}
{/if}


<style>
	div {
		margin: 10px 0;
	}
	.treasure-row {
		margin-left: 20px;
	}
</style>