declare module "@3d-dice/dice-box-threejs" {
	type DiceRoll = {
		type: string;
		sides: number;
		id: number;
		value: number;
		label: string;
		reason: string;
	};
	type DiceSet = {
		num: number;
		type: string;
		sides: number;
		rolls: DiceRoll[];
		total: number;
	};
	type Result = {
		notation: string;
		sets: DiceSet[];
		modifier: number;
		total: number;
	};

	type Config = {
		assetPath?: string;
		framerate?: number;
		sounds?: boolean;
		volume?: number;
		color_spotlight?: number;
		shadows?: boolean;
		theme_surface?: "green-felt";
		sound_dieMaterial?: "plastic";
		theme_customColorset?: {
			background: string;
			foreground: string;
			texture: "marble" | "ice"; // marble | ice
			material: "metal" | "glass" | "plastic" | "wood";
		};
		theme_colorset?:
			| "coin_default"
			| "coin_silver"
			| "radiant"
			| "fire"
			| "ice"
			| "poison"
			| "acid"
			| "thunder"
			| "lightning"
			| "air"
			| "water"
			| "earth"
			| "force"
			| "psychic"
			| "necrotic"
			| "breebaby"
			| "pinkdreams"
			| "inspired"
			| "bloodmoon"
			| "starynight"
			| "glitterparty"
			| "astralsea"
			| "bronze"
			| "dragons"
			| "birdup"
			| "tigerking"
			| "covid"
			| "isabelle"
			| "thecage"
			| "test"
			| "rainbow"
			| "black"
			| "white" // see available colorsets in https://github.com/3d-dice/dice-box-threejs/blob/main/src/const/colorsets.js
			| "swrpg_abi"
			| "swrpg_pro"
			| "swrpg_dif"
			| "swrpg_cha"
			| "swrpg_boo"
			| "swrpg_set"
			| "swrpg_for"
			| "swa_red"
			| "swa_blue"
			| "swa_black"
			| "xwing_red"
			| "xwing_green"
			| "swl_atkred"
			| "swl_atkblack"
			| "swl_atkwhite"
			| "swl_defred"
			| "swl_defwhite";
		theme_texture?:
			| "cloudy"
			| "cloudy_2" // see available textures in https://github.com/3d-dice/dice-box-threejs/blob/main/src/const/texturelist.js
			| "fire"
			| "marble"
			| "water"
			| "ice"
			| "paper"
			| "speckles"
			| "glitter"
			| "glitter_2"
			| "stars"
			| "stainedglass"
			| "wood"
			| "metal"
			| "skulls"
			| "leopard"
			| "tiger"
			| "cheetah"
			| "dragon"
			| "lizard"
			| "bird"
			| "astral"
			| "acleaf"
			| "thecage"
			| "isabelle"
			| "bronze01"
			| "bronze02"
			| "bronze03"
			| "bronze03a"
			| "bronze03b"
			| "bronze04"
			| "none"
			| "";

		theme_material?: "glass" | "none" | "metal" | "wood" | "plastic";
		gravity_multiplier?: number;
		light_intensity?: number;
		baseScale?: number;
		strength?: number; // toss strength of dice
		onRollComplete?: (results: Result) => void;
		iterationLimit?: number;
		onRerollComplete?: (results: Result) => void;
		onAddDiceComplete?: (results: Result) => void;
		onRemoveDiceComplete?: (results: Result) => void;
	};
	class Box {
		constructor(id: string, options: Config);

		initialize(): Promise<void>;

		roll(notation: string): Promise<void>;

		updateConfig(config: Config): void;
	}

	export default Box;
}
