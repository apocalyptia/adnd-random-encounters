<script>
	import TreasureTypeList from "../../lists/TreasureTypeList.js"

	export let encounter

	const monster = encounter.monsterList[0]
</script>


<div>Alignment: {monster.AL}</div>
<div>Hit Die: {monster.HD}</div>
<div>Intelligence: {monster.IN}</div>
{#if monster.LA.length}
	<div>Language{monster.LA.length > 1 ? "s" : ""}: {monster.LA.join(", ")}</div>
{/if}
<div>Size: {monster.SZ}</div>
{#if monster.DE.length}
	<div>Description: {monster.DE}</div>
{/if}
{#if monster.NO.length}
	<div>Notes: {monster.NO}</div>
{/if}
<details open>
	<summary>Total Treasure</summary>
	<div class="treasure-details">
		{#each TreasureTypeList as type}
			{#if encounter.totalTreasure[type]}
				<div>{type.toUpperCase()}: {encounter.totalTreasure[type]}</div>
			{/if}
		{/each}
	</div>
</details>


<style>
	div {
		margin: 10px 0;
	}
</style>