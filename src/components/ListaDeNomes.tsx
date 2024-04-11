import Add from "@mui/icons-material/Add";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import type { AbstractDTO as IdT } from "../models/Abstract/IdDTO";
import type { AbstractDTO as NT } from "../models/Abstract/NameDTO";
import type { RoutePath } from "../routing/RouteNames";
import { THEME_OPTIONS } from "../theme";
import { Constants } from "../util/constants";
import { routeTo } from "../util/functions";

type In = {
	to: RoutePath;
	lista: (IdT.IdType & NT.NameType)[];
};
const ListaDeNomes = ({ lista, to }: In) => (
	<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
		{lista.map((datum) => (
			<Grid
				item
				xs={12}
				sm={8}
				md={6}
				lg={4}
				xl={3}
				display="flex"
				key={datum.nome}
			>
				<Button
					variant="contained"
					component={Link}
					to={routeTo(to, datum.id)}
					endIcon={<Add color="primary" />}
					sx={{
						flex: 1,
						textTransform: "capitalize",
						justifyContent: "space-between",
						minWidth: Constants.CSS.caixaGrande.width,
						minHeight: Constants.CSS.caixaGrande.height,
						borderRadius: Constants.CSS.caixaGrande.radius,
						background: THEME_OPTIONS.palette?.background?.paper,
					}}
				>
					{datum.nome}
				</Button>
			</Grid>
		))}
	</Grid>
);

export default ListaDeNomes;
