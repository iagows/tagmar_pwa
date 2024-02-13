import Anao from "./anao.svg";
import Armadura from "./armadura.svg";
import Bardo from "./bardo.svg";
import Cavalo from "./cavalo.svg";
import ElfoDourado from "./elfo_dourado.svg";
import ElfoFlorestal from "./elfo_florestal.svg";
import Elmo from "./elmo.svg";
import Guerreiro from "./guerreiro.svg";
import Humano from "./humano.svg";
import Ladino from "./ladino.svg";
import Mago from "./mago.svg";
import MeioElfo from "./meio_elfo.svg";
import Pequenino from "./pequenino.svg";
import Professor from "./professor.svg";
import Proibido from "./proibido.svg";
import Rastreador from "./rastreador.svg";
import Sacerdote from "./sacerdote.svg";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

enum ProfissaoAsset {
	BARDO = "bardo",
	GUERREIRO = "guerreiro",
	LADINO = "ladino",
	MAGO = "mago",
	RASTREADOR = "rastreador",
	SACERDOTE = "sacerdote",
}

enum RacaAsset {
	ANAO = "anao",
	ELFO_DOURADO = "elfo_dourado",
	ELFO_FLORESTAL = "elfo_florestal",
	HUMANO = "humano",
	MEIO_ELFO = "meio_elfo",
	PEQUENINO = "pequenino",
}

enum HabilidateAsset {
	ARMADURA = "armadura",
	CAVALO = "cavalo",
	ELMO = "elmo",
	PROFESSOR = "professor",
	PROIBIDO = "proibido",
}

function getProfissao(nome: ProfissaoAsset): FC<SvgProps> {
	switch (nome) {
		case ProfissaoAsset.BARDO:
			return Bardo;
		case ProfissaoAsset.GUERREIRO:
			return Guerreiro;
		case ProfissaoAsset.LADINO:
			return Ladino;
		case ProfissaoAsset.MAGO:
			return Mago;
		case ProfissaoAsset.RASTREADOR:
			return Rastreador;
		case ProfissaoAsset.SACERDOTE:
			return Sacerdote;
	}
}

function getRaca(nome: RacaAsset): FC<SvgProps> {
	switch (nome) {
		case RacaAsset.ANAO:
			return Anao;
		case RacaAsset.ELFO_DOURADO:
			return ElfoDourado;
		case RacaAsset.ELFO_FLORESTAL:
			return ElfoFlorestal;
		case RacaAsset.HUMANO:
			return Humano;
		case RacaAsset.MEIO_ELFO:
			return MeioElfo;
		case RacaAsset.PEQUENINO:
			return Pequenino;
	}
}

function getHabilidadeIcon(nome: HabilidateAsset): FC<SvgProps> {
	switch (nome) {
		case HabilidateAsset.ARMADURA:
			return Armadura;
		case HabilidateAsset.CAVALO:
			return Cavalo;
		case HabilidateAsset.ELMO:
			return Elmo;
		case HabilidateAsset.PROFESSOR:
			return Professor;
		case HabilidateAsset.PROIBIDO:
			return Proibido;
	}
}

export {
	RacaAsset,
	ProfissaoAsset,
	HabilidateAsset,
	getRaca,
	getProfissao,
	getHabilidadeIcon,
};
