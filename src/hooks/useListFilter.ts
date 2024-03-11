import { useEffect, useState } from "react";
import { AbstractDTO } from "../models/Abstract/NameDTO";
import { Constants } from "../util/constants";
import { StringUtil } from "../util/stringHelp";

type In<T extends AbstractDTO.NameType> = {
	input: string;
	selectedChar: string;
	list: T[];
};

type Out<T extends AbstractDTO.NameType> = {
	filtered: T[];
};

const useListFilter = <T extends AbstractDTO.NameType>({
	list,
	selectedChar,
	input,
}: In<T>): Out<T> => {
	const [filteredList, setFilteredList] = useState<T[]>(list);

	useEffect(() => {
		const charFiltered = list.filter(
			(m) =>
				selectedChar === "" ||
				StringUtil.extractFirstChar(m.nome) === selectedChar,
		);

		const clearedText = input.trim().toLowerCase();
		const filteredList = charFiltered.filter((m) =>
			StringUtil.compareWordWithWordsInSentence(
				clearedText,
				m.nome,
				Constants.MARGEM_DIFERENCA_PALAVRAS,
			),
		);

		setFilteredList(clearedText.length === 0 ? charFiltered : filteredList);
	}, [input, selectedChar, list]);

	return {
		filtered: filteredList,
	};
};

export default useListFilter;
