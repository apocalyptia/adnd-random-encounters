import { writable } from "svelte/store"

const encounterStore = {
	chance: 100,
	days: 5,
	environment: "Mountain",
	list: []
}

export default writable(encounterStore)