import { Button, Grid } from "@mui/material";
import Add from "@mui/icons-material/Add";

type ComNome = {
	nome: string;
};

type In = {
	lista: ComNome[];
};
const ListaDeNomes = ({ lista }: In) => (
	<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
		{lista.map((i) => (
			<Grid item key={i.nome} xs={12} sm={8} md={6} lg={4} xl={3}>
				<Button variant="contained" endIcon={<Add />}>
					{i.nome}
				</Button>
			</Grid>
		))}
	</Grid>
);

export default ListaDeNomes;
