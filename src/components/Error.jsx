import React from "react";

const Error = ({ children }) => {
	return (
		<div className=" bg-red-600 text-center rounded-md uppercase p-3 text-white font-bold mb-3 ">
			{children}
		</div>
	);
};

export default Error;
