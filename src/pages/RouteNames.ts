import { useLocation } from "react-router-dom";

export enum RoutePath {
	ROOT = "/",
	FICHAS = "/fichas",
	FICHA = "ficha/:id",
	DADO = "/dado",
	MAGIAS = "/magias",
	MAGIA = "/magia/:id",
	HABILIDADES = "/habilidades",
	HABILIDADE = "/habilidade/:id",
	MAPAS = "/mapas",
	MAPA = "/mapa/:id",
	CONFIGURACOES = "/configuracoes",
	SOBRE = "/sobre",
}

export const useRouteTitle = (): string => {
	const { pathname } = useLocation();
	const p = pathname as RoutePath;

	switch (p) {
		case RoutePath.ROOT:
		case RoutePath.FICHAS:
			return "Fichas";
		case RoutePath.FICHA:
			return "Nome do personagem";
		case RoutePath.DADO:
			return "Dado";
		case RoutePath.MAGIAS:
			return "Lista de Magias";
		case RoutePath.MAGIA:
			return "Nome da magia";
		case RoutePath.HABILIDADES:
			return "Lista de Habilidades";
		case RoutePath.HABILIDADE:
			return "Nome da habilidade";
		case RoutePath.MAPAS:
			return "Mapas";
		case RoutePath.MAPA:
			return "Nome da região";
		case RoutePath.CONFIGURACOES:
			return "Configurações";
		case RoutePath.SOBRE:
			return "Sobre";
		default:
			return "outro";
	}
};
