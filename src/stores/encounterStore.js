import { writable } from "svelte/store"

const encounterStore = {
	currentEncounter: 0,
	days: 1,
	environment: "Any",
	list: []
}

export default writable(encounterStore)