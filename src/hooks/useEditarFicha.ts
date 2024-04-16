import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router";
import { type Ficha, ModoDaFicha } from "../models/FichaDTO";
import { ProfissaoEnum } from "../models/ProfissaoDTO";
import { RacaEnum } from "../models/RacaDTO";
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
};

export default useEditarFicha;
