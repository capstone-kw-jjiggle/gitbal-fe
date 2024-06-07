function MainButton({ title, onClick }) {
	return (
		<button onClick={onClick} className="h-8 w-32 rounded bg-primary text-sm font-bold text-white shadow-lg">
			{title}
		</button>
	);
}

export default MainButton;
