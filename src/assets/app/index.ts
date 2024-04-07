import { ProfissaoEnum } from "../../models/ProfissaoDTO";
import { RacaEnum } from "../../models/RacaDTO";
import Anao from "./anao.svg?react";
import ElfoDourado from "./elfo_dourado.svg?react";
import ElfoFloresta from "./elfo_florestal.svg?react";
import Humano from "./humano.svg?react";
import MeioElfo from "./meio_elfo.svg?react";
import Pequenino from "./pequenino.svg?react";
import Bardo from "./bardo.svg?react";
import Guerreiro from "./guerreiro.svg?react";
import Ladino from "./ladino.svg?react";
import Mago from "./mago.svg?react";
import Rastreador from "./rastreador.svg?react";
import Sacerdote from "./sacerdote.svg?react";

export type TagAsset = React.FunctionComponent<
	React.SVGProps<SVGSVGElement> & {
		title?: string | undefined;
	}
>;

const getAssetRaca = (raca: RacaEnum): TagAsset => {
	switch (raca) {
		case RacaEnum.ANAO:
			return Anao;
		case RacaEnum.ELFO_DOURADO:
			return ElfoDourado;
		case RacaEnum.ELFO_FLORESTAL:
			return ElfoFloresta;
		case RacaEnum.HUMANO:
			return Humano;
		case RacaEnum.MEIO_ELFO:
			return MeioElfo;
		case RacaEnum.PEQUENINO:
			return Pequenino;
	}
};

const getAssetProfissao = (profissao: ProfissaoEnum): TagAsset => {
	switch (profissao) {
		case ProfissaoEnum.BARDO:
			return Bardo;
		case ProfissaoEnum.GUERREIRO:
			return Guerreiro;
		case ProfissaoEnum.LADINO:
			return Ladino;
		case ProfissaoEnum.MAGO:
			return Mago;
		case ProfissaoEnum.RASTREADOR:
			return Rastreador;
		case ProfissaoEnum.SACERDOTE:
			return Sacerdote;
	}
};

const getAsset = (desired: RacaEnum | ProfissaoEnum): TagAsset => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	if ((<any>Object).values(RacaEnum).includes(desired)) {
		const d = desired as RacaEnum;
		return getAssetRaca(d);
	}
	const d = desired as ProfissaoEnum;
	return getAssetProfissao(d);
};

export default getAsset;
