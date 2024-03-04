import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";
import { Magias as MagiasA } from "./magiaA";
import { Magias as MagiasB } from "./magiaB";
import { Magias as MagiasC } from "./magiaC";
import { Magias as MagiasD } from "./magiaD";
import { Magias as MagiasE } from "./magiaE";
import { Magias as MagiasF } from "./magiaF";

export const MAGIAS: Magia[] = [
	...MagiasA.lista,
	...MagiasB.lista,
	...MagiasC.lista,
	...MagiasD.lista,
	...MagiasE.lista,
	...MagiasF.lista,
];

export const getMagia = (id: MagiaEnum): Magia | undefined =>
	MAGIAS.filter((m) => m.id === id)?.[0];
