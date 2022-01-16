<script>
	export let encounter, number

	const monster = encounter.monster
</script>


<monster-stats>
	<details>
		<summary>
			<span>Name: {monster.name} {number+1}</span>
		</summary>
		<details-content>
			<div>Armor Class: {monster.AC}</div>
			<div>Alignment: {monster.AL}</div>
			<div>Attack(s): {monster.AT.join(",")} {monster.WP.length ? monster.WP[0] : ""}</div>
			{#if monster.AR.length}
				<div>Armor: {monster.AR.join(", ")}</div>
			{/if}
			{#if monster.GR.length}
				<div>Gear: {monster.GR.join(", ")}</div>
			{/if}
			<div>Hit Die: {monster.HD}</div>
			<div>Hit Point: <input type="number" value={monster.HP} min=0 max={monster.HP} />/{monster.HP}</div>
			<div>Intelligence: {monster.IN}</div>
			{#if monster.LA.length}
				<div>Language(s): {monster.LA.join(", ")}</div>
			{/if}
			<div>Movement: {monster.MV}</div>
			{#if monster.SA.length}
				<div>Special Attack(s): {monster.SA}</div>
			{/if}
			{#if monster.SD.length}
				<div>Special Defense(s): {monster.SD}</div>
			{/if}
			{#if monster.SE.length}
				<div>Special Sense(s): {monster.SE}</div>
			{/if}
			{#if monster.SV.length}
				<div>Special Vulnerability: {monster.SV}</div>
			{/if}
			<div>Size: {monster.SZ}</div>
			<div>Treasure: {monster.TR}</div>
			{#if monster.DE.length}
				<div>Description: {monster.DE}</div>
			{/if}
			{#if monster.NO.length}
				<div>Notes: {monster.NO}</div>
			{/if}
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
	input[type="number"] {
		padding: 0 0 0 10px;
	}
	div {
		margin: 10px 0;
	}
</style>