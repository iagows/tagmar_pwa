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
import { useState } from "react";
import getAsset from "../../assets/app";
import { Ficha } from "../../models/FichaDTO";
import useFicha from "../../stores/slices/fichas/useFicha";
import { THEME_OPTIONS } from "../../theme";
import { changeOpacity } from "../../util/functions";
import TagLabel from "../TagmarUI/Label";
import TagModal from "../TagmarUI/TagModal";

type In = {
	ficha: Ficha;
};

const SPACE_AROUND = {
	display: "flex",
	justifyContent: "space-around",
} as const;

const COLUMN = {
	flex: 1,
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
} as const;

const FLEX_1 = { display: "flex", flex: 1 } as const;

const FichaCard = ({ ficha }: In) => {
	const { changeFav, delete_ } = useFicha();
	const RacaImage = getAsset(ficha.raca);
	const ProfissaoImage = getAsset(ficha.profissao);

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	function apagar() {
		delete_(ficha.id);
		handleClose();
	}

	function onChangeFav() {
		changeFav(ficha.id);
	}

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
			{open && (
				<TagModal
					onConfirm={apagar}
					title="Confirmação"
					onCancel={handleClose}
					confirmText="Confirmar"
				>
					<Box>
						<TagLabel>Tem certeza que deseja apagar a ficha?</TagLabel>
					</Box>
				</TagModal>
			)}
			<CardActionArea>
				<CardContent>
					<Box sx={FLEX_1}>
						<Avatar alt={ficha.raca}>
							<RacaImage />
						</Avatar>
						<Box sx={COLUMN}>
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
			<CardActions sx={SPACE_AROUND}>
				<IconButton aria-label="Favorito" onClick={onChangeFav}>
					{ficha.isFavorito ? (
						<FavoriteIcon color="primary" />
					) : (
						<FavoriteBorder color="primary" />
					)}
				</IconButton>
				<IconButton aria-label="Editar">
					<EditOutlined color="primary" />
				</IconButton>
				<IconButton aria-label="Apagar" onClick={handleOpen}>
					<DeleteOutlined color="primary" />
				</IconButton>
			</CardActions>
		</Card>
	);
};
export default FichaCard;
