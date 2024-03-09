import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";
import { Magias as MagiasA } from "./magiaA";
import { Magias as MagiasB } from "./magiaB";
import { Magias as MagiasC } from "./magiaC";
import { Magias as MagiasD } from "./magiaD";
import { Magias as MagiasE } from "./magiaE";
import { Magias as MagiasF } from "./magiaF";
import { Magias as MagiasG } from "./magiaG";
import { Magias as MagiasH } from "./magiaH";
import { Magias as MagiasI } from "./magiaI";
import { Magias as MagiasL } from "./magiaL";
import { Magias as MagiasM } from "./magiaM";
import { Magias as MagiasN } from "./magiaN";
import { Magias as MagiasO } from "./magiaO";
import { Magias as MagiasP } from "./magiaP";
import { Magias as MagiasQ } from "./magiaQ";
import { Magias as MagiasR } from "./magiaR";
import { Magias as MagiasS } from "./magiaS";
import { Magias as MagiasT } from "./magiaT";
import { Magias as MagiasU } from "./magiaU";
import { Magias as MagiasV } from "./magiaV";

export const MAGIAS: Magia[] = [
	...MagiasA.lista,
	...MagiasB.lista,
	...MagiasC.lista,
	...MagiasD.lista,
	...MagiasE.lista,
	...MagiasF.lista,
	...MagiasG.lista,
	...MagiasH.lista,
	...MagiasI.lista,
	...MagiasL.lista,
	...MagiasM.lista,
	...MagiasN.lista,
	...MagiasO.lista,
	...MagiasP.lista,
	...MagiasQ.lista,
	...MagiasR.lista,
	...MagiasS.lista,
	...MagiasT.lista,
	...MagiasU.lista,
	...MagiasV.lista,
];

export const getMagia = (id: MagiaEnum): Magia | undefined =>
	MAGIAS.filter((m) => m.id === id)?.[0];
