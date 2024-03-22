import Clear from "@mui/icons-material/Clear";
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { VoidCallback } from "../../util/commonTypes";

type In = {
	anchorEl: null | HTMLElement;
	open: boolean;
	onClose: VoidCallback;
	onClear: VoidCallback;
};

const FilterMenu = ({ anchorEl, open, onClose, onClear }: In) => {
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
				paper: {
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
				},
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<MenuItem onClick={onClose}>
				<Avatar /> Profile
			</MenuItem>
			<MenuItem onClick={onClose}>
				<Avatar /> My account
			</MenuItem>
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
