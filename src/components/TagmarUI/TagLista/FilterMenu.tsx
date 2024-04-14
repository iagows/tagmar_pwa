import type { SlotComponentProps } from "@mui/base/utils";
import Clear from "@mui/icons-material/Clear";
import {
	Divider,
	ListItemIcon,
	Menu,
	MenuItem,
	type PaperTypeMap,
} from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { PropsWithChildren } from "react";
import type { VoidCallback } from "../../../util/commonTypes";

type In = {
	open: boolean;
	onClose: VoidCallback;
	onClear: VoidCallback;
	anchorEl: null | HTMLElement;
};

const PAPER: SlotComponentProps<
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	OverridableComponent<PaperTypeMap<{}, "div">>,
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	{},
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	{}
> = {
	elevation: 0,
	sx: {
		overflow: "visible",
		filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
		mt: 1.5,
		"& .MuiAvatar-root": {
			width: 32,
			height: 32,
			ml: -0.5,
			mr: 1,
		},
		"&::before": {
			content: '""',
			display: "block",
			position: "absolute",
			top: 0,
			right: 14,
			width: 10,
			height: 10,
			bgcolor: "background.paper",
			transform: "translateY(-50%) rotate(45deg)",
			zIndex: 0,
		},
	},
};

const FilterMenu = ({
	open,
	onClose,
	onClear,
	anchorEl,
	children,
}: PropsWithChildren<In>) => {
	const _onClear = () => {
		onClear();
		onClose();
	};
	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			onClose={onClose}
			onClick={onClose}
			slotProps={{
				paper: PAPER,
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			{children}
			<Divider />
			<MenuItem onClick={_onClear}>
				<ListItemIcon>
					<Clear fontSize="small" />
				</ListItemIcon>
				Limpar
			</MenuItem>
		</Menu>
	);
};

export default FilterMenu;
