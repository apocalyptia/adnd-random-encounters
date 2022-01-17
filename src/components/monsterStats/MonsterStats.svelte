<script>
	import CombatStats from "./CombatStats.svelte"
	import GearStats from "./GearStats.svelte"

	export let encounter, number
</script>


<monster-stats>
	<details>
		<summary>
			{encounter.monsterList[0].name} {number+1}
		</summary>
		<details-content>
			<stat-group>
				<CombatStats {encounter} {number} />
			</stat-group>
			<stat-group>
				<GearStats {encounter} {number} />
			</stat-group>
		</details-content>
	</details>
</monster-stats>


<style>
	monster-stats {
		border: 1px solid #CCC;
		display: block;
		margin: 10px;
		padding: 10px;
	}
	stat-group {
		border: 1px solid #CCC;
		display: block;
		margin: 10px;
		padding: 10px;
	}
</style>