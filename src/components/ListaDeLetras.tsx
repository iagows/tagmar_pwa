import { Box, Button } from "@mui/material";
import { extractFirstChar } from "../util/functions";

type HasName = {
	nome: string;
};

type In = {
	lista: HasName[];
};

const getChar = (obj: HasName): string => extractFirstChar(obj.nome);
const getCharSet = (lista: HasName[]): Set<string> =>
	new Set(lista.map(getChar));
const getCharList = (lista: HasName[]): string[] => [...getCharSet(lista)];

const ListaDeLetras = ({ lista }: In) => {
	const letras = getCharList(lista);

	return (
		<Box sx={{ gap: 1, display: "flex" }}>
			{letras.map((l) => (
				<Button
					variant="outlined"
					key={l}
					sx={{ maxWidth: "10px", minWidth: "10px" }}
				>
					{l}
				</Button>
			))}
		</Box>
	);
};

export default ListaDeLetras;
