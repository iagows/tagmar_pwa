import { AtributoEnum } from "../models/AtributoDTO";
import { ProfissaoEnum } from "../models/ProfissaoDTO";
import { RacaEnum } from "../models/RacaDTO";
import { MagiaEnum } from "../models/magia/MagiaDTO";

type RelacaoRaca = {
	raca: RacaEnum;
	atributos: Map<AtributoEnum, number>;
	profissoesProibidas: Set<ProfissaoEnum>;
};

type RelacaoProfissaoMagia = {
	profissao: ProfissaoEnum;
	magia: Set<MagiaEnum>;
	// fazer para ordens, colégios etc
};

export namespace Relations {}
