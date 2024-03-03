import { Magia } from "../models/magia/MagiaDTO";
import { Magias as MagiasA } from "./magiaA";
import { Magias as MagiasB } from "./magiaB";

export const MAGIAS: Magia[] = [...MagiasA.A, ...MagiasB.B];
