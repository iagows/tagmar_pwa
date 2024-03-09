import { Button, Grid } from "@mui/material";
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
