import { MAGIAS } from "../data/magiasCompiladas";
import { Relations } from "../data/relations";
import type { AbstractDTO as IdDTO } from "../models/Abstract/IdDTO";
import type { AbstractDTO as NameDTO } from "../models/Abstract/NameDTO";
import type { ProfissaoEnum } from "../models/ProfissaoDTO";
import type { Magia, MagiaEnum } from "../models/magia/MagiaDTO";
import useConfig from "../stores/slices/config/useConfig";
import useFilter from "../stores/slices/filters/useFilter";
import type { VoidCallback } from "../util/commonTypes";
import { StringUtil } from "../util/stringHelp";

const filterByProfissao = (profs: ProfissaoEnum[], item: MagiaEnum): boolean =>
	Relations.filterMagiaPor(profs, item);

type Out = {
	input: {
		text: string;
		setText: (s: string) => void;
	};
	list: {
		data: Magia[];
	};
	char: {
		char: string;
		onCharClick: (c: string) => void;
	};
	filter: {
		has: boolean;
		clear: VoidCallback;
	};
	profissao: {
		exists: (prof: ProfissaoEnum) => boolean;
		swap: (prof: ProfissaoEnum) => void;
	};
};

const usePageMagias = (): Out => {
	const {
		char: { add: setChar, current: currentChar },
		clearAll,
		hasFilter,
		nome: { add: setNome, current: currentNome },
		profissao: {
			has: hasProfissao,
			swap: swapProfissao,
			selectedArray: profissoesSelecionadas,
		},
	} = useFilter();
	const { isBuscaInexata } = useConfig();

	const profFilter = (i: IdDTO.IdType) =>
		filterByProfissao(profissoesSelecionadas, i.id as MagiaEnum);
	const charFilter = (i: NameDTO.NameType) =>
		StringUtil.filterByFirstChar(currentChar, i.nome);
	const proxFilter = (i: NameDTO.NameType) =>
		isBuscaInexata
			? StringUtil.filterByProximity(currentNome, i.nome)
			: StringUtil.filterByExact(currentNome, i.nome);

	const filtered = MAGIAS.filter(profFilter)
		.filter(charFilter)
		.filter(proxFilter);

	return {
		input: {
			setText: setNome,
			text: currentNome,
		},
		list: {
			data: filtered,
		},
		char: {
			char: currentChar,
			onCharClick: setChar,
		},
		filter: {
			clear: clearAll,
			has: hasFilter,
		},
		profissao: {
			exists: hasProfissao,
			swap: swapProfissao,
		},
	};
};

export default usePageMagias;
