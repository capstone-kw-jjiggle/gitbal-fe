import level1 from './../../../../assets/images/regionLevel/regionLevel1.svg';

export default function RegionRank4th({ rank, regionName, score, scoreIncrease, mvpId }) {
	return (
		<div className="h-full w-full bg-white px-6 py-7 text-black19">
			<div className=" flex justify-between">
				<img src={level1} className=" mt-1 h-12 w-12" />
				<div className="flex flex-col justify-end text-end">
					<p className=" text-lg font-bold">
						{rank}위 {regionName}
					</p>
					<p className=" mt-1 text-sm text-primary">뚱이네집</p>
				</div>
			</div>
			<div className="mt-8 flex flex-col  justify-between align-bottom">
				<p className=" flex text-xs text-green-500">+{scoreIncrease}점</p>
				<p className="flex text-xl">{score}점</p>
			</div>
			<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
			<p className=" text-xs">
				MVP <span className=" text-primary">{mvpId}</span>
			</p>
		</div>
	);
}
