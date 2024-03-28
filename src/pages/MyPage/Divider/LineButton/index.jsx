export default function LineButton({ title }) {
	return (
		<div className="w-1/12">
			<p className="text-center text-sm font-bold">{title}</p>
			<hr className="mt-1 w-full border-b-2 border-red-900" />
		</div>
	);
}
