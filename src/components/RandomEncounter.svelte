<script>
	import MonsterStats from "./MonsterStats.svelte";

	export let encounter
</script>


<random-encounter>
	<details>
		<summary>
			<span>Day: {encounter.day + 1}, Hour: {encounter.hour} - {encounter.monster.name}</span>
		</summary>
		<details-contents>
			<div>Number: {encounter.number}</div>
			{#each Array(encounter.number) as monster, number}
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
</style>