import { Autocomplete, Box, TextField } from "@mui/material";
import { RacaEnum } from "../../../models/RacaDTO";
import { enumToList } from "../../../util/enumHelp";
import { ProfissaoEnum } from "../../../models/ProfissaoDTO";
import { DEUSES } from "../../../data/deuses";

const RACAS = enumToList(RacaEnum).map((item) => ({ label: item }));
const PROFISSOES = enumToList(ProfissaoEnum).map((item) => ({ label: item }));
const DEUSES_COMBO = DEUSES.sort((a, b) => a.id.localeCompare(b.id)).map(
	(i) => ({ label: i.id }),
);

type InCombo = {
	list: Record<string, string>[];
	id: string;
	label: string;
};

const LocalCombo = ({ list, id, label }: InCombo) => (
	<Autocomplete
		disablePortal
		options={list}
		sx={{ width: 300 }}
		id={`combo-box-${id}`}
		renderInput={(params) => <TextField {...params} label={label} />}
	/>
);

const TabFichaDados = () => {
	return (
		<Box>
			<TextField
				id="nome"
				required
				label="Nome"
				placeholder="Digite aqui o nome"
			/>
			<LocalCombo id="racas" list={RACAS} label="Raças" />
			<LocalCombo id="profissoes" list={PROFISSOES} label="Profissões" />
			<p>especialização</p>
			<LocalCombo id="deuses" list={DEUSES_COMBO} label="Deuses" />
			<Box>
				<TextField id="xpRestante" label="Experiência" placeholder="00" />
				<TextField id="xpUsado" placeholder="00" />
				<TextField id="iniciativa" label="Iniciativa" placeholder="00" />
			</Box>
		</Box>
	);
};

export default TabFichaDados;
