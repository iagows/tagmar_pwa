import { useEffect, useState } from "react";
import { HasName } from "../util/commonTypes";
import { Constants } from "../util/constants";
import { StringUtil } from "../util/stringHelp";

type In<T extends HasName> = {
	input: string;
	selectedChar: string;
	list: T[];
};

type Out<T extends HasName> = {
	filtered: T[];
};

const useListFilter = <T extends HasName>({
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
