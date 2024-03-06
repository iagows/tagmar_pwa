import { HasDescription } from "../../util/commonTypes";
import { StringUtil } from "../../util/stringHelp";
import TagLabel from "../TagmarUI/Label";

type In = {
	item: HasDescription;
};

const Descricao = ({ item }: In) => (
	<>
		{StringUtil.getDescricaoLonga(item).map((d, i) => (
			<TagLabel key={`desc_${i + 1}`} textAlign={"justify"}>
				{d}
			</TagLabel>
		))}
	</>
);

export default Descricao;
