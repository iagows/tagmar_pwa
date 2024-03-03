import { Box, Button } from "@mui/material";
import { HasName } from "../util/commonTypes";
import { StringUtil } from "../util/stringHelp";

type In = {
	lista: HasName[];
	selected: string;
	onClick: (char: string) => void;
};

const getChar = (obj: HasName): string => StringUtil.extractFirstChar(obj.nome);
const getCharSet = (lista: HasName[]): Set<string> =>
	new Set(lista.map(getChar));
const getCharList = (lista: HasName[]): string[] => [...getCharSet(lista)];

/////////////

const ListaDeLetras = ({ lista, onClick, selected }: In) => {
	const letras = getCharList(lista);

	return (
		<Box sx={{ gap: 1, display: "flex" }}>
			{letras.map((l) => (
				<Button
					key={l}
					onClick={() => onClick(l)}
					variant="outlined"
					sx={{ maxWidth: "10px", minWidth: "10px" }}
					color={selected !== l ? "secondary" : "primary"}
				>
					{l}
				</Button>
			))}
		</Box>
	);
};

export default ListaDeLetras;
