import type { Magia, MagiaEnum } from "../models/magia/MagiaDTO";
import { Magias as MagiasA } from "./magia/magiaA";
import { Magias as MagiasB } from "./magia/magiaB";
import { Magias as MagiasC } from "./magia/magiaC";
import { Magias as MagiasD } from "./magia/magiaD";
import { Magias as MagiasE } from "./magia/magiaE";
import { Magias as MagiasF } from "./magia/magiaF";
import { Magias as MagiasG } from "./magia/magiaG";
import { Magias as MagiasH } from "./magia/magiaH";
import { Magias as MagiasI } from "./magia/magiaI";
import { Magias as MagiasL } from "./magia/magiaL";
import { Magias as MagiasM } from "./magia/magiaM";
import { Magias as MagiasN } from "./magia/magiaN";
import { Magias as MagiasO } from "./magia/magiaO";
import { Magias as MagiasP } from "./magia/magiaP";
import { Magias as MagiasQ } from "./magia/magiaQ";
import { Magias as MagiasR } from "./magia/magiaR";
import { Magias as MagiasS } from "./magia/magiaS";
import { Magias as MagiasT } from "./magia/magiaT";
import { Magias as MagiasU } from "./magia/magiaU";
import { Magias as MagiasV } from "./magia/magiaV";

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
