import {
	DeleteOutlined,
	EditOutlined,
	FavoriteBorder,
} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
	Avatar,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	IconButton,
	Typography,
} from "@mui/material";
import getAsset from "../../../assets/app";
import { Ficha } from "../../../models/FichaDTO";
import { THEME_OPTIONS } from "../../../theme";
import { changeOpacity } from "../../../util/functions";
import TagLabel from "../../TagmarUI/Label";

type In = {
	ficha: Ficha;
};

const FichaCard = ({ ficha }: In) => {
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
					<div style={{ display: "flex", flex: 1 }}>
						<Avatar alt={ficha.raca}>
							<RacaImage />
						</Avatar>
						<div
							style={{
								flex: 1,
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<Typography variant="h5">{ficha.nome}</Typography>
							<TagLabel>
								{ficha.narrador} - {ficha.nivel}
							</TagLabel>
						</div>
						<Avatar alt={ficha.profissao}>
							<ProfissaoImage />
						</Avatar>
					</div>
				</CardContent>
			</CardActionArea>
			<CardActions
				sx={{
					display: "flex",
					justifyContent: "space-around",
				}}
			>
				<IconButton aria-label="Favorito">
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
