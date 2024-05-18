export default function PageNavigationButton({ children, onNavigatePage, isNext }) {
	return (
		<li className="h-6 text-lg">
			<button
				onClick={() => {
					onNavigatePage((prev) => (isNext ? prev + 1 : prev - 1));
				}}>
				{children}
			</button>
		</li>
	);
}
