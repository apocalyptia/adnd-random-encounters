<script>
	export let encounter, number

	const monster = encounter.monsterList[number]
</script>


<div>AC: {monster.AC}</div>
<div>ATK: {monster.AT.join(", ")} {monster.WP.length ? monster.WP[0] : ""}</div>
<div>HP: <input type="number" value={monster.HP} min=0 max={monster.HP} />/{monster.HP}</div>
<div>MV: {monster.MV}</div>
{#if monster.SA.length}
	<div>Special Attack{monster.SA.length > 1 ? "s" : ""}: {monster.SA.join(", ")}</div>
{/if}
{#if monster.SD.length}
	<div>Special Defense{monster.SD.length > 1 ? "s" : ""}: {monster.SD.join(", ")}</div>
{/if}
{#if monster.SE.length}
	<div>Special Sense{monster.SE.length > 1 ? "s" : ""}: {monster.SE.join(", ")}</div>
{/if}
{#if monster.SV.length}
	<div>Special Vulnerability: {monster.SV.join(", ")}</div>
{/if}


<style>
	input[type="number"] {
		padding: 0 0 0 10px;
	}
	div {
		margin: 10px 0;
	}
</style>