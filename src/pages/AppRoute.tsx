import { Route, Routes } from "react-router-dom";
import PageFicha from "./PageFicha";
import PageFichas from "./PageFichas";

enum Pathes {
	ROOT = "/",
	FICHA = "/ficha",
}

const AppRoute = () => {
	return (
		<Routes>
			<Route path={Pathes.ROOT} element={<PageFichas />} />
			<Route path={Pathes.ROOT} element={<PageFicha />} />
		</Routes>
	);
};

export default AppRoute;
