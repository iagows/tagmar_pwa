import Clear from "@mui/icons-material/Clear";
import Search from "@mui/icons-material/SearchOutlined";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { VoidCallback } from "../../util/commonTypes";
import FilterMenu from "./FilterMenu";
import { FilterAlt } from "@mui/icons-material";

type In = {
	text: string;
	label: string;
	showClearButton: boolean;
	onClearText: VoidCallback;
	onClearFilters: VoidCallback;
	onChange: (text: string) => void;
	filterMenuItems?: React.ReactNode;
};

const TextFieldWithFilter = ({
	text,
	label,
	children,
	onChange,
	onClearText,
	onClearFilters,
	showClearButton,
}: PropsWithChildren<In>) => {
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
							<FilterAlt color="primary" />
						</IconButton>
						<FilterMenu
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							onClear={onClearFilters}
						>
							{children}
						</FilterMenu>
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
