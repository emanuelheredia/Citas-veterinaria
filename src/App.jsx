import React from "react";
import Formulario from "./components/Formulario";
import Headers from "./components/Headers";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
	return (
		<div className="container mx-auto mt-2">
			<Headers />
			<div className="mt-10 md:flex">
				<Formulario />
				<ListadoPacientes />
			</div>
		</div>
	);
}

export default App;
