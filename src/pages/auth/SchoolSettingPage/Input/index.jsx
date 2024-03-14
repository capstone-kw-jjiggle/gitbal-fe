export default function Input({ placeholder, type, value, onChange, ...props }) {
	return (
		<>
			<input
				className=" mt-4 h-10 w-full rounded border border-grey69 p-3 text-sm  text-black19 focus:border-primary"
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange} // 값 변경 시 setEmail 호출이 안됨...ㅜㅜ
			/>
		</>
	);
}
