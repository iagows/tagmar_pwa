import DiceBox from "@3d-dice/dice-box-threejs";
import { useCallback, useEffect, useState } from "react";
import type { VoidCallback } from "../util/commonTypes";

async function getBox(id: string): Promise<DiceBox> {
	const diceBox = new DiceBox(id, {
		theme_customColorset: {
			// background: [
			//   "#00ffcb",
			//   "#ff6600",
			//   "#1d66af",
			//   "#7028ed",
			//   "#c4c427",
			//   "#d81128"
			// ], // randomly assigned colors
			background: "#00ffcb",
			foreground: "#ffffff",
			texture: "marble", // marble | ice
			material: "metal", // metal | glass | plastic | wood
		},
		light_intensity: 1,
		gravity_multiplier: 600,
		baseScale: 100,
		strength: 2,
		sounds: true,
		onRollComplete: (results) => {
			console.log(`I've got results :>> `, results);
		},
	});

	await diceBox.initialize();
	return diceBox;
}

const NUMBERS = Array.from({ length: 20 }, (_, i) => i + 1);
const getRandom = () => NUMBERS[Math.floor(Math.random() * NUMBERS.length)];

function rodarDados(box: DiceBox, amount = 1): void {
	box.roll(`${amount}d20@${getRandom()}`);
}

type In = {
	containerId: string;
};

type Out = { box?: DiceBox; rodar: VoidCallback };

const useDiceBox = ({ containerId }: In): Out => {
	const [box, setBox] = useState<DiceBox>();

	const startBox = useCallback(async () => {
		const b = await getBox(containerId);
		setBox(b);
	}, [containerId]);

	useEffect(() => {
		if (!box) {
			startBox();
		}
		return () => {
			if (box) {
				box.clearDice();
			}
		};
	}, [box, startBox]);

	const rodar = useCallback(() => {
		if (box) {
			rodarDados(box);
		}
	}, [box]);

	return {
		box,
		rodar,
	};
};

export default useDiceBox;
