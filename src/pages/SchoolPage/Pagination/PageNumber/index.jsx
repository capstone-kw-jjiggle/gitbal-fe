export default function PageNumber({ children, number, onSetPage, currentPage }) {
	let defaultStyle = 'flex h-12 w-9 items-center justify-center border-2 border-r-0 border-greyD9';
	let defaultButtonStlye = '';

	if (number === 1) defaultStyle += ' rounded-l';

	if (currentPage === number) {
		defaultStyle += ' bg-gray-100 font-bold';
		defaultButtonStlye++;
	}

	return (
		<li className={defaultStyle}>
			<button onClick={() => onSetPage(number)}>{children}</button>
		</li>
	);
}
