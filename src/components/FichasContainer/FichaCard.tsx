import {
	DeleteOutlined,
	EditOutlined,
	FavoriteBorder,
} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
	Avatar,
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	IconButton,
} from "@mui/material";
import getAsset from "../../assets/app";
import { Ficha } from "../../models/FichaDTO";
import useFicha from "../../stores/slices/fichas/useFicha";
import { THEME_OPTIONS } from "../../theme";
import { changeOpacity } from "../../util/functions";
import TagLabel from "../TagmarUI/Label";

type In = {
	ficha: Ficha;
};

const FichaCard = ({ ficha }: In) => {
	const { changeFav } = useFicha();
	const RacaImage = getAsset(ficha.raca);
	const ProfissaoImage = getAsset(ficha.profissao);

	return (
		<Card
			sx={{
				backgroundColor: changeOpacity(
					// biome-ignore lint/style/noNonNullAssertion: <eu criei>
					THEME_OPTIONS.palette!.background!.default!,
					0.8,
				),
			}}
		>
			<CardActionArea>
				<CardContent>
					<Box sx={{ display: "flex", flex: 1 }}>
						<Avatar alt={ficha.raca}>
							<RacaImage />
						</Avatar>
						<Box
							sx={{
								flex: 1,
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<TagLabel variant="h5">{ficha.nome}</TagLabel>
							<TagLabel>
								{ficha.narrador} - {ficha.nivel}
							</TagLabel>
						</Box>
						<Avatar alt={ficha.profissao}>
							<ProfissaoImage />
						</Avatar>
					</Box>
				</CardContent>
			</CardActionArea>
			<CardActions
				sx={{
					display: "flex",
					justifyContent: "space-around",
				}}
			>
				<IconButton aria-label="Favorito" onClick={() => changeFav(ficha.id)}>
					{ficha.isFavorito ? (
						<FavoriteIcon color="primary" />
					) : (
						<FavoriteBorder color="primary" />
					)}
				</IconButton>
				<IconButton aria-label="Editar">
					<EditOutlined color="primary" />
				</IconButton>
				<IconButton aria-label="Apagar">
					<DeleteOutlined color="primary" />
				</IconButton>
			</CardActions>
		</Card>
	);
};
export default FichaCard;
