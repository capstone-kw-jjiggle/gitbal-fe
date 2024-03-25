export default function MainContainer({ children }) {
	return (
		<div className="mx-auto flex w-3/5 flex-grow flex-col">
			<div className="flex flex-grow flex-col">{children}</div>
		</div>
	);
}
