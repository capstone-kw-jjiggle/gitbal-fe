import { forwardRef } from 'react';

const SchoolSettingInput = forwardRef(({ placeholder, type, register }, ref) => {
	return (
		<>
			<input
				className="mt-5 h-10 w-full rounded border border-grey69 p-3 text-sm  text-black19 focus:border-primary"
				ref={ref}
				placeholder={placeholder}
				type={type}
				{...register}
			/>
		</>
	);
});

SchoolSettingInput.displayName = 'SchoolSettingInput';

export default SchoolSettingInput;
