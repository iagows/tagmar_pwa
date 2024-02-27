import { InputAdornment, TextField } from "@mui/material";
import PageContainer from "../components/PageContainer";
import SearchOutlined from "@mui/icons-material/SearchOutlined";

const top100Films = [
	{ title: "Magia1", year: 1994 },
	{ title: "Magia2", year: 1994 },
	{ title: "Magia3", year: 1998 },
	{ title: "Magia4", year: 1998 },
	{ title: "Magia5", year: 2000 },
];

const PageMagias = () => {
	return (
		<PageContainer>
			<TextField
				label="Nome da magia"
				variant="outlined"
				InputProps={{
					endAdornment: (
						<InputAdornment position="start">
							<SearchOutlined />
						</InputAdornment>
					),
				}}
			/>
			<div style={{ display: "flex", gap: 10 }}>
				<p>a</p>
				<p>b</p>
				<p>c</p>
				<p>d</p>
				<p>e</p>
				<p>...</p>
				<p>z</p>
			</div>
			<div>
				<p>Magia</p>
				<p>Magia</p>
				<p>Magia</p>
				<p>Magia</p>
				<p>Magia</p>
				<p>Magia</p>
			</div>
		</PageContainer>
	);
};

export default PageMagias;
