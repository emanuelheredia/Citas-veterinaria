import React from "react";
import { useEffect, useState } from "react";

const Formulario = () => {
	const [nombre, setnombre] = useState("nombre");
	console.log(nombre);
	return (
		<div className="md:w-1/2 lg:w-2/5 ">
			<h2 className="font-black text-3xl text-center">
				Seguimiento Pacientes
			</h2>
			<p className="mb-5 text-xl text-center">
				Añade Pacientes y{" "}
				<span className="text-indigo-600 font-bold text-lg">
					Administralos
				</span>
			</p>
			<form className="bg-white shadow-md rounded-lg py-10 px-5 mb-3 ">
				<div className="mb-5">
					<label
						htmlFor="mascota"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Mascota
					</label>
					<input
						id="mascota"
						className="border-2  w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="text"
						placeholder="Nombre de la mascota"
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="propietario"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						className="border-2  w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="text"
						placeholder="Nombre del Propietario"
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block text-gray-700 uppercase font-bold"
					>
						Email
					</label>
					<input
						id="email"
						className="border-2  w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="text"
						placeholder="Email Contacto Propietario"
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="date"
						className="block text-gray-700 uppercase font-bold"
					>
						Alta
					</label>
					<input
						id="date"
						className="border-2  w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="date"
						placeholder="Alta"
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="sintomas"
						className="block text-gray-700 uppercase font-bold"
					>
						Sintomas
					</label>
					<textarea
						className="mt-2 w-full p-3"
						id="sintomas"
						cols="30"
						rows="10"
						placeholder="Describa los Síntomas "
					/>
				</div>
				<input
					type="submit"
					className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-sm cursor-pointer transition-all"
					value="Agregar Paciente"
				/>
			</form>
		</div>
	);
};

export default Formulario;
