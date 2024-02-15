import { changeOpacity } from "../util/functions";

const FFF = "#ffffff";

const Colors = {
	fundo: {
		normal: "#121212",
		modal: "#2A2A2A",
	},
	branco: {
		_32: changeOpacity(FFF, 0.32),
		_42: changeOpacity(FFF, 0.42),
		_70: changeOpacity(FFF, 0.7),
		_100: FFF,
	},
	cinza: {
		claro: "#717171",
		escuro: "#D0D0D0",
	},
	primaria: {
		normal: "#70B0E0",
		dark: "#052640",
		light: "#BADFFB",
	},
	secundaria: {
		normal: "#FFAC3D",
		dark: "#B06A0B",
		light: "#F3D9B5",
	},
	terciaria: {
		normal: "#496AD0",
		dark: "#172A65",
		light: "#9AADE9",
	},
	erro: "#ff7878",
} as const;

export { Colors };
