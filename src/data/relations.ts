import { AtributoEnum } from "../models/AtributoDTO";
import { ProfissaoEnum } from "../models/ProfissaoDTO";
import { RacaEnum } from "../models/RacaDTO";
import { MagiaEnum } from "../models/magia/MagiaDTO";

type AtributoProfissao = {
	atributos: Map<AtributoEnum, number>;
	profissoesProibidas?: Set<ProfissaoEnum>;
};

type RelacaoRacaAtributoProfissao = Map<RacaEnum, AtributoProfissao>;

const racaAtributoProfissao: RelacaoRacaAtributoProfissao = new Map<
	RacaEnum,
	AtributoProfissao
>([
	[
		RacaEnum.ANAO,
		{
			atributos: new Map([
				[AtributoEnum.AGILIDADE, -1],
				[AtributoEnum.FISICO, 2],
				[AtributoEnum.FORCA, 1],
			]),
			profissoesProibidas: new Set([
				ProfissaoEnum.MAGO,
				ProfissaoEnum.RASTREADOR,
				ProfissaoEnum.BARDO,
			]),
		},
	],
	[
		RacaEnum.ELFO_DOURADO,
		{
			atributos: new Map([
				[AtributoEnum.AGILIDADE, 1],
				[AtributoEnum.AURA, 2],
				[AtributoEnum.FISICO, -1],
				[AtributoEnum.FORCA, -1],
				[AtributoEnum.INTELECTO, 1],
			]),
		},
	],
	[
		RacaEnum.ELFO_FLORESTAL,
		{
			atributos: new Map([
				[AtributoEnum.AGILIDADE, 1],
				[AtributoEnum.AURA, 1],
				[AtributoEnum.FISICO, -1],
				[AtributoEnum.FORCA, -1],
				[AtributoEnum.PERCEPCAO, 2],
			]),
		},
	],
	[
		RacaEnum.PEQUENINO,
		{
			atributos: new Map([
				[AtributoEnum.AGILIDADE, 2],
				[AtributoEnum.CARISMA, 1],
				[AtributoEnum.FISICO, 1],
				[AtributoEnum.FORCA, -2],
				[AtributoEnum.PERCEPCAO, 1],
			]),
			profissoesProibidas: new Set([
				ProfissaoEnum.MAGO,
				ProfissaoEnum.RASTREADOR,
				ProfissaoEnum.BARDO,
			]),
		},
	],
	[
		RacaEnum.HUMANO,
		{
			atributos: new Map(),
		},
	],
	[
		RacaEnum.MEIO_ELFO,
		{
			atributos: new Map([
				[AtributoEnum.AGILIDADE, 1],
				[AtributoEnum.CARISMA, 1],
			]),
		},
	],
]);

type RelacaoProfissaoMagia = Map<ProfissaoEnum, Map<MagiaEnum, number>>;

const profissaoMagia: RelacaoProfissaoMagia = new Map<
	ProfissaoEnum,
	Map<MagiaEnum, number>
>([
	[
		ProfissaoEnum.RASTREADOR,
		new Map([
			[MagiaEnum.abrigo, 1],
			[MagiaEnum.adestramento, 1],
			[MagiaEnum.aprimorarHabilidades, 2],
			[MagiaEnum.arqueirismo, 2],
			[MagiaEnum.camuflagem, 1],
			[MagiaEnum.despistamento, 1],
			[MagiaEnum.dominacaoAnimal, 1],
			[MagiaEnum.eloAnimal, 2],
			[MagiaEnum.forcaMutua, 2],
			[MagiaEnum.habilidadeAnimal, 2],
			[MagiaEnum.protecaoAnimal, 2],
			[MagiaEnum.rastreamento, 2],
			[MagiaEnum.resistencia, 2],
			[MagiaEnum.visaoAnimal, 2],
		]),
	],
	[
		ProfissaoEnum.BARDO,
		new Map([
			[MagiaEnum.amizade, 3],
			[MagiaEnum.cancaoDoAnimo, 2],
			[MagiaEnum.distracao, 1],
			[MagiaEnum.empatia, 1],
			[MagiaEnum.escrita, 1],
			[MagiaEnum.lendas, 1],
			[MagiaEnum.linguagem, 2],
			[MagiaEnum.memorizacao, 1],
			[MagiaEnum.modificarEspirito, 2],
			[MagiaEnum.seducao, 1],
			[MagiaEnum.silencio, 2],
			[MagiaEnum.ventriloquismo, 1],
		]),
	],
	[
		ProfissaoEnum.SACERDOTE,
		new Map([
			[MagiaEnum.apelo, 2],
			[MagiaEnum.bencao, 2],
			[MagiaEnum.curasFisicas, 2],
			[MagiaEnum.curasHeroicas, 2],
			[MagiaEnum.deteccaoDeMagia, 1],
			[MagiaEnum.esconjuracao, 1],
			[MagiaEnum.maldicoes, 1],
			[MagiaEnum.ordens, 1],
			[MagiaEnum.quebraDeEncantos, 1],
			[MagiaEnum.recuperacaoFisica, 2],
			[MagiaEnum.regeneracao, 2],
			[MagiaEnum.resistencia, 2],
			[MagiaEnum.ressurreicao, 2],
			[MagiaEnum.sagracao, 2],
		]),
	],
	[
		ProfissaoEnum.MAGO,
		new Map([
			[MagiaEnum.amizade, 2],
			[MagiaEnum.analise, 1],
			[MagiaEnum.bolaDeFogo, 2],
			[MagiaEnum.contatosMentais, 1],
			[MagiaEnum.desintegracao, 2],
			[MagiaEnum.deteccaoDeMagia, 2],
			[MagiaEnum.invisibilidade, 2],
			[MagiaEnum.levitacao, 1],
			[MagiaEnum.manipulacaoDeLuz, 1],
			[MagiaEnum.mutacao, 2],
			[MagiaEnum.quebraDeEncantos, 2],
			[MagiaEnum.raioEletrico, 2],
			[MagiaEnum.sono, 1],
			[MagiaEnum.telecinese, 1],
			[MagiaEnum.transformacao, 2],
			[MagiaEnum.transporteDimensional, 2],
		]),
	],
]);

export namespace Relations {
	export const getProfissoesProibidasPor = (
		raca: RacaEnum,
	): ProfissaoEnum[] => {
		const proibidas =
			racaAtributoProfissao.get(raca)?.profissoesProibidas ?? new Set();

		return [...proibidas];
	};

	export const getValorDeAtributosPor = (
		raca: RacaEnum,
		atributo: AtributoEnum,
	): number => {
		const atributos = racaAtributoProfissao.get(raca)?.atributos;
		return atributos?.get(atributo) ?? 0;
	};

	export const getProfissoesMagicas = (): ProfissaoEnum[] => {
		const profs = profissaoMagia.keys();
		return [...profs].sort();
	};

	export const getMagiasPor = (profissao: ProfissaoEnum): MagiaEnum[] => {
		const magias =
			profissaoMagia.get(profissao) ?? new Map<MagiaEnum, number>();
		const ids = magias.keys();

		return [...ids];
	};

	export const filterMagiaPor = (
		profissoes: ProfissaoEnum[],
		magia: MagiaEnum,
	): boolean => {
		if (profissoes.length === 0) {
			return true;
		}
		return profissoes.flatMap(getMagiasPor).some((m) => m === magia);
	};

	export const getCustoPorProfissaoMagia = (
		profissao: ProfissaoEnum,
		magia: MagiaEnum,
	): number | undefined => {
		return profissaoMagia.get(profissao)?.get(magia);
	};
}
