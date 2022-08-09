import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Headers from "./components/Headers";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	const eliminarPaciente = (id) => {
		const pacientesActualizados = pacientes.filter(
			(paciente) => paciente.id !== id,
		);
		setPacientes(pacientesActualizados);
	};

	return (
		<div className="container mx-auto mt-2">
			<Headers />
			<div className="mt-10 md:flex">
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;
