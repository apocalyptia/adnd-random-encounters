<script>
	import environmentList from "../lists/EnvironmentList.js";
	import encounterStore from "../stores/encounterStore.js";
	import createRandomEncounter from "../functions/createRandomEncounter.js";

	const randomEncounter = () => {
		$encounterStore.list.length = 0
		$encounterStore.list = [
			...createRandomEncounter($encounterStore.days, $encounterStore.environment)
		]
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
</style>