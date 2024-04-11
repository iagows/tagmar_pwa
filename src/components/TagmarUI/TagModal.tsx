import { Box, Button, Modal } from "@mui/material";
import type { PropsWithChildren } from "react";
import type { VoidCallback } from "../../util/commonTypes";
import TagLabel from "./Label";

const style = {
	p: 4,
	top: "50%",
	left: "50%",
	width: 300,
	height: 280,
	boxShadow: 24,
	border: "2px solid #000",
	bgcolor: "background.paper",
	position: "absolute" as const,
	transform: "translate(-50%, -50%)",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	justifyContent: "space-between",
};

type In = {
	title: string;
	confirmText: string;
	onConfirm: VoidCallback;
	cancelText?: string;
	onCancel: VoidCallback;
};

const TagModal = ({
	title,
	onCancel,
	children,
	onConfirm,
	confirmText,
	cancelText = "Voltar",
}: PropsWithChildren<In>) => {
	return (
		<Modal
			open
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<TagLabel variant="h6">{title}</TagLabel>
				<Box>{children}</Box>
				<Box display="flex" flexDirection="column">
					<Button
						variant="contained"
						onClick={onConfirm}
						sx={{
							flex: 1,
						}}
					>
						{confirmText}
					</Button>
					<Button onClick={onCancel}>{cancelText}</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default TagModal;
