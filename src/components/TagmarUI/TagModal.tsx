import { Box, Button, ButtonProps, Modal } from "@mui/material";
import { VoidCallback } from "../../util/commonTypes";
import { PropsWithChildren } from "react";
import TagLabel from "./Label";

const style = {
	p: 4,
	position: "absolute" as const,
	top: "50%",
	left: "50%",
	width: 300,
	height: 280,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	transform: "translate(-50%, -50%)",
};

type In = {
	title: string;
	positive: {
		text: string;
		onClick: VoidCallback;
	};
	negative: {
		text: string;
		onClick: VoidFunction;
	};
};

const TagModal = ({
	title,
	positive,
	negative,
	children,
}: PropsWithChildren<In>) => {
	return (
		<Modal
			open
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<TagLabel>{title}</TagLabel>
				<Box>{children}</Box>
				<Box display="flex" flexDirection="column">
					<Button onClick={positive.onClick}>{positive.text}</Button>
					<Button onClick={negative.onClick}>{negative.text}</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default TagModal;
