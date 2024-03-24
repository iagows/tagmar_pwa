import { Avatar, Badge, Box, MenuItem } from "@mui/material";
import getAsset from "../assets/app";
import ListaDeLetras from "../components/ListaDeLetras";
import ListaDeNomes from "../components/ListaDeNomes";
import PageContainer from "../components/PageContainer";
import TextFieldWithFilter from "../components/TagmarUI/TagLista/TextFieldWithFilter";
import { Relations } from "../data/relations";
import usePageMagias from "../hooks/usePageMagias";
import { RoutePath } from "../routing/RouteNames";

const profissoes = Relations.getProfissoesMagicas();

const PageMagias = () => {
	const { input, list, char, filter } = usePageMagias();

	return (
		<PageContainer>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				<TextFieldWithFilter
					text={input.text}
					label="Nome da magia"
					onChange={input.setText}
					onClearText={input.clear}
					onClearFilters={filter.clear}
					showClearButton={input.hasText}
				>
					{profissoes.map((p) => {
						const Icon = getAsset(p);
						const hideBadge = !filter.exists(p);

						return (
							<MenuItem key={p} onClick={() => filter.swap(p)}>
								<Badge
									variant="dot"
									color="primary"
									overlap="circular"
									invisible={hideBadge}
									anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								>
									<Avatar>
										<Icon />
									</Avatar>
								</Badge>{" "}
								{p}
							</MenuItem>
						);
					})}
				</TextFieldWithFilter>
				<ListaDeLetras
					lista={list.data}
					onClick={char.onCharClick}
					selected={char.char}
				/>
				<ListaDeNomes lista={list.data} to={RoutePath.MAGIA} />
			</Box>
		</PageContainer>
	);
};

export default PageMagias;
