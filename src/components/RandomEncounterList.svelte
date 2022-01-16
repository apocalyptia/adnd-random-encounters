<script>
	import encounterStore from "../stores/encounterStore.js";
	import RandomEncounter from "./RandomEncounter.svelte";
</script>


<encounter-list>
	{#if $encounterStore.list.length}
		{#each $encounterStore.list as encounter}
			<RandomEncounter {encounter} />
		{/each}
	{:else}
		<div class="no-encounters">No encounters.</div>
	{/if}
</encounter-list>


<style>
	encounter-list {
		border: 1px solid #CCC;
		display: block;
		width: 75vw;
	}
	.no-encounters {
		padding: 10px;
	}
</style>