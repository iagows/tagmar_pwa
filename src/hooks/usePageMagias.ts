import { useState } from "react";
import { MAGIAS } from "../data/magiasCompiladas";
import { Relations } from "../data/relations";
import { AbstractDTO as IdDTO } from "../models/Abstract/IdDTO";
import { AbstractDTO as NameDTO } from "../models/Abstract/NameDTO";
import { ProfissaoEnum } from "../models/ProfissaoDTO";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";
import { VoidCallback } from "../util/commonTypes";
import { swapSet } from "../util/functions";
import { StringUtil } from "../util/stringHelp";
import useConfig from "../stores/slices/config/useConfig";

const filterByProfissao = (profs: ProfissaoEnum[], item: MagiaEnum): boolean =>
	Relations.filterMagiaPor(profs, item);

type Out = {
	input: {
		text: string;
		setText: (s: string) => void;
		clear: VoidCallback;
		hasText: boolean;
	};
	list: {
		data: Magia[];
	};
	char: {
		char: string;
		onCharClick: (c: string) => void;
	};
	filter: {
		clear: VoidCallback;
		swap: (prof: ProfissaoEnum) => void;
		exists: (prof: ProfissaoEnum) => boolean;
	};
};
const usePageMagias = (): Out => {
	const [text, setText] = useState<string>("");
	const [selectedCharButton, setSelectedCharButton] = useState<string>("");
	const [selectedProf, setSelectedProf] = useState<Set<ProfissaoEnum>>(
		new Set(),
	);
	const { isBuscaInexata } = useConfig();

	const profFilter = (i: IdDTO.IdType) =>
		filterByProfissao([...selectedProf], i.id as MagiaEnum);
	const charFilter = (i: NameDTO.NameType) =>
		StringUtil.filterByFirstChar(selectedCharButton, i.nome);
	const proxFilter = (i: NameDTO.NameType) =>
		isBuscaInexata
			? StringUtil.filterByProximity(text, i.nome)
			: StringUtil.filterByExact(text, i.nome);

	const filtered = MAGIAS.filter(profFilter)
		.filter(charFilter)
		.filter(proxFilter);

	function clearText() {
		setText("");
		setSelectedCharButton("");
	}

	function clearFilters() {
		setSelectedProf(new Set());
	}

	function onCharClick(char: string): void {
		setSelectedCharButton((last) => (char === last ? "" : char));
	}

	function swap(prof: ProfissaoEnum): void {
		setSelectedProf((last) => swapSet(last, prof));
	}

	function exists(prof: ProfissaoEnum): boolean {
		return selectedProf.has(prof);
	}

	const hasText: boolean = text.length > 0 || selectedCharButton.length > 0;

	return {
		input: {
			clear: clearText,
			hasText,
			setText,
			text,
		},
		list: {
			data: filtered,
		},
		char: {
			char: selectedCharButton,
			onCharClick,
		},
		filter: {
			clear: clearFilters,
			swap,
			exists,
		},
	};
};

export default usePageMagias;
