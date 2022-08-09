import React from "react";

const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {
	return (
		<div className="mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl">
			<p className="font-bold mb-3 uppercase text-gray-700">
				Nombre:{" "}
				<span className="font-normal normal-case ">
					{paciente.nombre}
				</span>
			</p>
			<p className="font-bold mb-3 uppercase text-gray-700">
				Propietario:{" "}
				<span className="font-normal normal-case ">
					{paciente.propietario}
				</span>
			</p>
			<p className="font-bold mb-3 uppercase text-gray-700">
				Email:{" "}
				<span className="font-normal normal-case ">
					{paciente.email}
				</span>
			</p>
			<p className="font-bold mb-3 uppercase text-gray-700">
				Fecha Alta:{" "}
				<span className="font-normal normal-case ">
					{paciente.fecha}
				</span>
			</p>
			<p className="font-bold mb-3 uppercase text-gray-700">
				Síntomas:{" "}
				<span className="font-normal normal-case ">
					{paciente.sintomas}
				</span>
			</p>
			<div className="flex justify-between mt-10 ">
				<button
					type="button"
					className="py-2 px-10 rounded-lg uppercase bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
					onClick={() => setPaciente(paciente)}
				>
					Editar
				</button>
				<button
					type="button"
					className="py-2 px-10 rounded-lg uppercase bg-red-600 hover:bg-red-700 text-white font-bold"
					onClick={() => eliminarPaciente(paciente.id)}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Pacientes;
