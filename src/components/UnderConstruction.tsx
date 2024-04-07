import { Box } from "@mui/material";
import under from "../assets/under-construction.png";
import TagLabel from "./TagmarUI/Label";

type In = {
	descricao: string;
};

const UnderConstruction = ({ descricao }: In) => {
	return (
		<Box display={"flex"} alignItems={"center"} gap={3} margin={2}>
			<img alt="em construção" src={under} height={50} width={50} />
			<TagLabel>{descricao}</TagLabel>
		</Box>
	);
};

export default UnderConstruction;
