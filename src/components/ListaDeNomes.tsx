import Add from "@mui/icons-material/Add";
import { Button, Grid } from "@mui/material";
import { THEME_OPTIONS } from "../theme";
import { HasName } from "../util/commonTypes";
import { CSS } from "../util/constants";

type In = {
	lista: HasName[];
};
const ListaDeNomes = ({ lista }: In) => (
	<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
		{lista.map((i) => (
			<Grid item key={i.nome} xs={12} sm={8} md={6} lg={4} xl={3}>
				<Button
					variant="contained"
					endIcon={<Add color="primary" />}
					sx={{
						minWidth: CSS.caixaGrande.width,
						minHeight: CSS.caixaGrande.height,
						borderRadius: CSS.caixaGrande.radius,
						background: THEME_OPTIONS.palette?.background?.paper,
					}}
				>
					{i.nome}
				</Button>
			</Grid>
		))}
	</Grid>
);

export default ListaDeNomes;
