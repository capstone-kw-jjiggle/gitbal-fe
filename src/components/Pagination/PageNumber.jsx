export default function PageNumber({ children, number, onSetPage, currentPage }) {
	let defaultStyle = 'flex h-12 w-10 items-center justify-center hover:text-primary hover:text-lg font-bold';
	let buttonStyle = 'h-7';

	if (currentPage === number) {
		defaultStyle += ' font-bold text-primary text-lg';
		buttonStyle += ' border-b-2 border-primary';
	}

	return (
		<li className={defaultStyle}>
			<button onClick={() => onSetPage(number)} className={buttonStyle}>
				{children}
			</button>
		</li>
	);
}
