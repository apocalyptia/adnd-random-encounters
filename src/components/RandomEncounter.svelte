<script>
	import DescriptionStats from "./monsterStats/DescriptionStats.svelte";
	import MonsterStats from "./monsterStats/MonsterStats.svelte";

	export let encounter
</script>


<random-encounter>
	<details open>
		<summary>
			<span>[ Day: {encounter.day + 1}, Hour: {encounter.hour} ] - {encounter.monsterList.length} {encounter.monsterList[0].name}{encounter.monsterList.length > 1 ? "s" : ""}</span>
		</summary>
		<details-contents>
			<stat-group>
				<DescriptionStats {encounter} />
			</stat-group>
			{#each encounter.monsterList as monster, number}
				<MonsterStats {encounter} {number} />
			{/each}
		</details-contents>
	</details>
</random-encounter>


<style>
	random-encounter {
		border: 1px solid #CCC;
		display: block;
	}
	summary {
		padding: 10px;
	}
	details-contents {
		display: block;
		padding: 10px;
	}
	stat-group {
		border: 1px solid #CCC;
		display: block;
		margin: 10px;
		padding: 10px;
	}
</style>