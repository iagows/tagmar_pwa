import Clear from "@mui/icons-material/Clear";
import Filter from "@mui/icons-material/FilterAlt";
import Search from "@mui/icons-material/SearchOutlined";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { VoidCallback } from "../../util/commonTypes";
import FilterMenu from "./FilterMenu";

type In = {
	text: string;
	label: string;
	showClearButton: boolean;
	onClearText: VoidCallback;
	onClearFilters: VoidCallback;
	onChange: (text: string) => void;
};

const TextFieldWithFilter = ({
	text,
	label,
	onChange,
	onClearText,
	onClearFilters,
	showClearButton,
}: In) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<TextField
			value={text}
			label={label}
			variant="outlined"
			onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
				onChange(event.target.value);
			}}
			InputProps={{
				endAdornment: (
					<InputAdornment position="start">
						{showClearButton && (
							<IconButton onClick={onClearText}>
								<Clear />
							</IconButton>
						)}
						<IconButton onClick={handleClick}>
							<Filter color="primary" />
						</IconButton>
						<FilterMenu
							anchorEl={anchorEl}
							onClose={handleClose}
							open={open}
							onClear={onClearFilters}
						/>
					</InputAdornment>
				),
				startAdornment: (
					<IconButton disabled>
						<Search />
					</IconButton>
				),
			}}
			placeholder="Nome da magia"
		/>
	);
};

export default TextFieldWithFilter;
