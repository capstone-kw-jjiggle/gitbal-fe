import React from 'react';

export default function CurrentTitleBox() {
	return (
		<div className="mb-8 flex h-72 w-full flex-col items-center justify-between rounded-2xl border border-gray-200 p-4 text-black19 shadow-lg ">
			<div className="w-full">
				<h1 className="text-lg font-extrabold">현재 나의 칭호 1</h1>
			</div>
			<div className="flex items-center justify-center text-4xl font-bold text-primary">
				<p>&quot;부지런히&quot;</p>
			</div>
			<select className="h-10 w-full rounded bg-greyD9 p-2 text-xl">
				<option>부지런히</option>
				<option>부지런히</option>
				<option>부지런히</option>
			</select>
		</div>
	);
}
