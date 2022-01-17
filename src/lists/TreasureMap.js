import rollTreasure from "../functions/rollTreasure.js"


export default {
	"A": () => rollTreasure(
		{
			chance: 25,
			number: "1d6"
		},
		{
			chance: 30,
			number: "1d6",
		},
		{
			chance: 40,
			number: "1d10"
		},
		{
			chance: 25,
			number: "1d4"
		},
		{
			chance: 60,
			number: "1d8"
		},
		{
			chance: 50,
			number: "1d4"
		}
	),
	"B": () => rollTreasure(
		{
			chance: 50,
			number: "1d8"
		},
		{
			chance: 25,
			number: "1d6",
		},
		{
			chance: 25,
			number: "1d3"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 30,
			number: "1d8"
		},
		{
			chance: 20,
			number: "1d4"
		}
	),
	"C": () => rollTreasure(
		{
			chance: 20,
			number: "1d12"
		},
		{
			chance: 30,
			number: "1d6",
		},
		{
			chance: 50,
			number: "1d6"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 25,
			number: "1d6"
		},
		{
			chance: 20,
			number: "1d3"
		}
	),
	"D": () => rollTreasure(
		{
			chance: 10,
			number: "1d8"
		},
		{
			chance: 15,
			number: "1d12",
		},
		{
			chance: 50,
			number: "1d6"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 30,
			number: "1d10"
		},
		{
			chance: 25,
			number: "1d6"
		}
	),
	"E": () => rollTreasure(
		{
			chance: 5,
			number: "1d10"
		},
		{
			chance: 25,
			number: "1d12",
		},
		{
			chance: 25,
			number: "1d8"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 15,
			number: "1d12"
		},
		{
			chance: 10,
			number: "1d8"
		}
	),
	"F": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 10,
			number: "1d10",
		},
		{
			chance: 40,
			number: "1d10"
		},
		{
			chance: 35,
			number: "1d8"
		},
		{
			chance: 20,
			number: "3d10"
		},
		{
			chance: 10,
			number: "1d10"
		}
	),
	"G": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 50,
			number: "10d4"
		},
		{
			chance: 50,
			number: "1d20"
		},
		{
			chance: 30,
			number: "5d4"
		},
		{
			chance: 25,
			number: "1d10"
		}
	),
	"H": () => rollTreasure(
		{
			chance: 25,
			number: "3d6"
		},
		{
			chance: 40,
			number: "1d100",
		},
		{
			chance: 55,
			number: "10d6"
		},
		{
			chance: 25,
			number: "5d10"
		},
		{
			chance: 50,
			number: "1d100"
		},
		{
			chance: 50,
			number: "10d4"
		}
	),
	"I": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 30,
			number: "3d6"
		},
		{
			chance: 55,
			number: "2d10"
		},
		{
			chance: 50,
			number: "1d12"
		}
	),
	"J": () => rollTreasure(
		{
			chance: 100,
			number: "3d12"
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"K": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 100,
			number: "3d6",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"L": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 100,
			number: "1d6"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"M": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 100,
			number: "2d8"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"N": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 100,
			number: "1d6"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"O": () => rollTreasure(
		{
			chance: 25,
			number: "1d4"
		},
		{
			chance: 20,
			number: "1d3",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"P": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 30,
			number: "1d6",
		},
		{
			chance: 25,
			number: "1"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"Q": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 50,
			number: "1d4"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"R": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 40,
			number: "2d4"
		},
		{
			chance: 50,
			number: "10d6"
		},
		{
			chance: 55,
			number: "4d8"
		},
		{
			chance: 45,
			number: "1d12"
		}
	),
	"S": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"T": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"U": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 90,
			number: "10d8"
		},
		{
			chance: 80,
			number: "5d6"
		}
	),
	"V": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"W": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 60,
			number: "5d6"
		},
		{
			chance: 15,
			number: "1d8"
		},
		{
			chance: 60,
			number: "10d8"
		},
		{
			chance: 50,
			number: "5d8"
		}
	),
	"X": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"Y": () => rollTreasure(
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: "",
		},
		{
			chance: 70,
			number: "2d6"
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		},
		{
			chance: 0,
			number: ""
		}
	),
	"Z": () => rollTreasure(
		{
			chance: 20,
			number: "1d3"
		},
		{
			chance: 25,
			number: "1d4",
		},
		{
			chance: 30,
			number: "1d4"
		},
		{
			chance: 30,
			number: "1d6"
		},
		{
			chance: 55,
			number: "10d6"
		},
		{
			chance: 50,
			number: "5d6"
		}
	),
}