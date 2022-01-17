<script>
	import RandomEncounterForm from "../components/RandomEncounterForm.svelte"
	import RandomEncounterList from "../components/RandomEncounterList.svelte"
	import encounterStore from "../stores/encounterStore.js"
</script>


<page>
	<RandomEncounterForm />
	<RandomEncounterList />
</page>


<style>
	page {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100vw;
	}
</style>