import {
	clear,
	char as setChar,
	nome as setNome,
	swap as swapProfissao,
} from ".";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { ProfissaoEnum } from "../../../models/ProfissaoDTO";
import type { VoidCallback } from "../../../util/commonTypes";

type Out = {
	char: {
		add: (c: string) => void;
		current: string;
	};
	nome: {
		add: (nome: string) => void;
		current: string;
	};
	profissao: {
		swap: (profissao: ProfissaoEnum) => void;
		has: (prof: ProfissaoEnum) => boolean;
		selectedArray: ProfissaoEnum[];
	};
	clearAll: VoidCallback;
	hasFilter: boolean;
};

const useFilter = (): Out => {
	const dispatch = useAppDispatch();
	const char = useAppSelector((state) => state.filter.letra);
	const nome = useAppSelector((state) => state.filter.nome);
	const profissao = useAppSelector((state) => state.filter.profissao);

	const setStoreChar = (c: string) => {
		dispatch(setChar(c));
	};

	const setStoreNome = (n: string) => {
		dispatch(setNome(n));
	};

	const swapStoreProfissao = (p: ProfissaoEnum): void => {
		dispatch(swapProfissao(p));
	};

	function clearStore() {
		dispatch(clear());
	}

	const hasFilter = char !== "" || nome !== "" || profissao.length > 0;

	return {
		char: {
			add: setStoreChar,
			current: char,
		},
		nome: {
			add: setStoreNome,
			current: nome,
		},
		profissao: {
			swap: swapStoreProfissao,
			selectedArray: [...profissao],
			has: (p) => profissao.indexOf(p) > -1,
		},
		hasFilter,
		clearAll: clearStore,
	};
};

export default useFilter;
