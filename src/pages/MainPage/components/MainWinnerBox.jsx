function MainWinnerBox({ schoolWinner, regionWinner }) {
	return (
		<div className="mt-11 flex flex-col ">
			<div className="flex flex-row text-lg">
				<p className="font-light">학교 1위</p>
				<p className="ml-10 font-semibold">{schoolWinner}</p>
			</div>
			<div className="mt-3 flex flex-row text-lg">
				<p className="font-light">지역 1위</p>
				<p className="ml-10 font-semibold">{regionWinner}</p>
			</div>
		</div>
	);
}

export default MainWinnerBox;
