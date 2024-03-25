export default function PageNumber({ children, number, onSetPage, currentPage }) {
	return (
		<li
			className={`${currentPage === number ? 'border-b border-primary font-medium text-primary' : ''} h-6 text-lg font-light`}>
			<button onClick={() => onSetPage(number)}>{children}</button>
		</li>
	);
}
