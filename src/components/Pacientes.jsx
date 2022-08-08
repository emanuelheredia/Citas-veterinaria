import React from "react";

const Pacientes = () => {
	return (
		<div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
			<p className="font-bold mb-3 uppercase text-gray-700">
				Nombre: <span className="font-normal normal-case ">Hook</span>
			</p>
			<p className="font-bold mb-3 uppercase text-gray-700">
				Propietario:{" "}
				<span className="font-normal normal-case ">Emanuel</span>
			</p>
			<p className="font-bold mb-3 uppercase text-gray-700">
				Email:{" "}
				<span className="font-normal normal-case ">
					correo@correo.com
				</span>
			</p>
			<p className="font-bold mb-3 uppercase text-gray-700">
				Fecha Alta:{" "}
				<span className="font-normal normal-case ">10/12/22</span>
			</p>
			<p className="font-bold mb-3 uppercase text-gray-700">
				Síntomas:{" "}
				<span className="font-normal normal-case ">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Iusto dolorem laudantium quibusdam officiis fugiat.
					Repellendus placeat dolore esse adipisci, eos ducimus nulla
					nisi repudiandae harum cupiditate dignissimos architecto id
					ratione.
				</span>
			</p>
		</div>
	);
};

export default Pacientes;
