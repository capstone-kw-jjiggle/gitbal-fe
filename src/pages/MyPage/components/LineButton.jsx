export default function LineButton({ 이름, 선택여부, onClick }) {
	return (
		<button className="w-1/12" onClick={() => onClick(이름)}>
			<p className="text-center text-sm font-bold">{이름}</p>
			<hr className={`mt-1 w-full border-b-2 border-greyBD` + `${선택여부 ? ' border-primary' : ''}`} />
		</button>
	);
}
