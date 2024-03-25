export default function PageNavigationButton({ children, onNavigatePage }) {
	let defaultStyle = 'h-13 w-6 flex items-center justify-center text-sm font-bold bg-grey-100';

	return (
		<li className={defaultStyle}>
			<button onClick={onNavigatePage}>{children}</button>
		</li>
	);
}
