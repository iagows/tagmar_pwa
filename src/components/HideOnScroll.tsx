import { Slide, useScrollTrigger } from "@mui/material";

type Props = {
	children: React.ReactElement;
};

function HideOnScroll(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		target: window ?? undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default HideOnScroll;
