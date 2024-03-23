export default function PageNavigationButton({ children, onNavigatePage, isLeft }) {
	let defaultStyle = 'h-13 w-9 flex items-center justify-center border-2 border-greyD9 text-sm font-light';
	if (isLeft) defaultStyle += ' border-r-0 rounded-l';
	else defaultStyle += ' rounded-r';

	return (
		<li className={defaultStyle}>
			<button
				onClick={() => {
					onNavigatePage((prev) => (isLeft ? prev - 1 : prev + 1));
				}}>
				{children}
			</button>
		</li>
	);
}
