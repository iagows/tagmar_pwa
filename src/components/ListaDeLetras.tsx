import { Button, Grid } from "@mui/material";
import type { AbstractDTO } from "../models/Abstract/NameDTO";
import { StringUtil } from "../util/stringHelp";

type In = {
	lista: AbstractDTO.NameType[];
	selected: string;
	onClick: (char: string) => void;
};

const getChar = (obj: AbstractDTO.NameType): string =>
	StringUtil.extractFirstChar(obj.nome);
const getCharSet = (lista: AbstractDTO.NameType[]): Set<string> =>
	new Set(lista.map(getChar));
const getCharList = (lista: AbstractDTO.NameType[]): string[] => [
	...getCharSet(lista),
];

/////////////

const ListaDeLetras = ({ lista, onClick, selected }: In) => {
	const letras = getCharList(lista);

	return (
		<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			{letras.map((l) => (
				<Grid key={l} item>
					<Button
						onClick={() => onClick(l)}
						variant="outlined"
						sx={{ maxWidth: "10px", minWidth: "10px" }}
						color={selected !== l ? "secondary" : "primary"}
					>
						{l}
					</Button>
				</Grid>
			))}
		</Grid>
	);
};

export default ListaDeLetras;
