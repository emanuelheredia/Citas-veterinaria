import React from "react";
import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [nombre, setNombre] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");
	const [error, setError] = useState(false);

	const generarID = () => {
		let fecha = Date.now().toString(36);
		let random = Math.random().toString(36).substring(2);
		return fecha + random;
	};

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setPropietario(paciente.propietario);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);
	const handleSubmit = (e) => {
		e.preventDefault();
		// Validacion formulario
		if ([nombre, propietario, email, fecha, sintomas].includes("")) {
			setError(true);
			return;
		}
		setError(false);

		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
		};

		if (paciente.id) {
			//Editando registro
			objetoPaciente.id = paciente.id;
			const pacientesActualizados = pacientes.map((pacienteState) =>
				pacienteState.id === paciente.id
					? objetoPaciente
					: pacienteState,
			);
			setPacientes(pacientesActualizados);
			setPaciente({});
		} else {
			objetoPaciente.id = generarID();
			setPacientes([...pacientes, objetoPaciente]);
		}

		//Reiniciar formulario
		setEmail("");
		setPropietario("");
		setFecha("");
		setNombre("");
		setSintomas("");
	};
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
			<form
				className="mx-3 bg-white shadow-md rounded-lg py-10 px-5 mb-3 "
				onSubmit={handleSubmit}
			>
				{error && (
					<Error>
						<p>Todos los campos son obligatorios</p>
					</Error>
				)}
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
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
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
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
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
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-sm cursor-pointer transition-all"
					value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
				/>
			</form>
		</div>
	);
};

export default Formulario;
