import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useParams } from "react-router";
import { type Ficha, ModoDaFicha } from "../models/FichaDTO";
import { ProfissaoEnum } from "../models/ProfissaoDTO";
import { RacaEnum } from "../models/RacaDTO";
import useFicha from "../stores/slices/fichas/useFicha";
import { DateUtil } from "../util/Data";

const criarFicha = (): Ficha => ({
	xp: 0,
	nome: "",
	nivel: 1,
	id: nanoid(),
	narrador: "",
	descricao: "",
	isFavorito: false,
	raca: RacaEnum.HUMANO,
	modo: ModoDaFicha.CRIACAO,
	criacao: DateUtil.nowString(),
	profissao: ProfissaoEnum.GUERREIRO,
	ultimaVisualizacao: DateUtil.nowString(),
});

const useEditarFicha = () => {
	const { id } = useParams();
	const { read, create, ativaFichaAtual } = useFicha();
	useEffect(() => {
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		const ficha = read(id!);
		if (ficha.length < 1) {
			const nova = criarFicha();
			create(nova);
		} else {
			ativaFichaAtual(ficha[0]);
		}
	}, [id, read, ativaFichaAtual, create]);
};

export default useEditarFicha;
