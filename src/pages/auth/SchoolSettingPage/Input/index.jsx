import { useState } from 'react';

export default function Input({ placeholder, type, ...props }) {
	return (
		<>
			<input
				className=" mt-8 h-10 w-full rounded border border-grey69 p-3 text-sm  text-black19 focus:border-primary"
				placeholder={placeholder}
				type={type}
			/>
		</>
	);
}
