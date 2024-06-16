export default function CurrentTitleBox({ currentTitle }) {
	return (
		<div className="mb-8 flex h-72 w-full flex-col items-center justify-between rounded-2xl border border-gray-200 p-4 text-black19 shadow-lg ">
			<div className="w-full">
				<h1 className="text-lg font-extrabold">현재 나의 칭호 1</h1>
			</div>
			<div className="flex items-center justify-center text-4xl font-bold text-primary">
				<p>&quot;{currentTitle}&quot;</p>
			</div>
			<select className="h-10 w-full rounded bg-greyD9 p-2 text-xl">
				<option>{currentTitle}</option>
				<option>{currentTitle}</option>
				<option>{currentTitle}</option>
			</select>
		</div>
	);
}
