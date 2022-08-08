import React from "react";
import Pacientes from "./Pacientes";

const ListadoPacientes = () => {
	return (
		<div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
			<h2 className="font-black text-3xl text-center">
				ListadoPacientes
			</h2>
			<p className="text-xl mb-5 text-center">
				Administra tus{" "}
				<span className="text-indigo-600 font-bold">
					Pacientes y Citas
				</span>
			</p>
			<Pacientes />
			<Pacientes />
			<Pacientes />
			<Pacientes />
			<Pacientes />
		</div>
	);
};

export default ListadoPacientes;