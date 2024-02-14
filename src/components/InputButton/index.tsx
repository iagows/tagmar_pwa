import styled from "styled-components";
import { Colors } from "../../theme";
import { CSS } from "../../util/constants";

type IInputButton = {
	isPrimary?: boolean;
};

const InputButtonComponent = styled.input<IInputButton>(({ isPrimary }) => ({
	flex: 1,
	height: 40,
	borderRadius: 5,
	cursor: "pointer",
	color: Colors.branco._100,
	padding: CSS.padding.button,
	border: isPrimary ? 0 : `2px solid ${Colors.branco._100}`,
	filter: `drop-shadow(0 4px 0.75rem ${Colors.fundo.normal})`,
	backgroundColor: isPrimary ? Colors.secundaria.normal : Colors.fundo.normal,
	transition: `background-color ${CSS.transition.time} ${CSS.transition.mode}`,
	"&:hover": {
		backgroundColor: Colors.fundo.modal,
	},
	"&:active": {
		backgroundColor: Colors.secundaria.light,
	},
}));

type IComponent = {
	text?: string;
	icon?: string;
	onClick?: () => void;
} & IInputButton;

const InputButton = ({
	icon,
	text,
	isPrimary = false,
	onClick,
}: IComponent) => {
	return (
		<InputButtonComponent
			value={text}
			type="button"
			onClick={onClick}
			isPrimary={isPrimary}
		/>
	);
};

export default InputButton;
