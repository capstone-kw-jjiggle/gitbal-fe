import getLevelImage from '@/utils/getLevelImage';

export default function SchoolRankItem({ rank, schoolName, score, mvpId, scoreIncrease, level }) {
	const imageUrl = getLevelImage(level);

	return (
		<div className="flex w-full items-center justify-between rounded-2xl border border-gray-200 px-12 py-3 text-black19 shadow-lg">
			<p className="text-2xl font-extrabold">{rank}위</p>
			<div className="flex w-1/2 ">
				<div className="mt-3 flex w-full flex-col">
					<div className="flex justify-between text-xl">
						<p className="font-bold">{schoolName}</p>
						<p>{score.toLocaleString()}점</p>
					</div>
					<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
					<div className="flex justify-end text-sm">
						<p>MVP</p>
						<p className="ml-4 text-primary">{mvpId}</p>
					</div>
				</div>
			</div>
			<div className="text-sm">
				<p>학교 점수 상승</p>
				<p className="text-green-500">+{scoreIncrease.toLocaleString()}점</p>
			</div>
			<div>
				<img src={imageUrl} className="ml-2 h-14 w-14" />
			</div>
		</div>
	);
}
