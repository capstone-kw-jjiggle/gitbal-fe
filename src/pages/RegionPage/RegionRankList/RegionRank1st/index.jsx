import level4 from './../../../../assets/images/regionLevel/regionLevel4.svg';

export default function RegionRank1st({ rank, regionName, score, scoreIncrease, mvpId }) {
	return (
		<div className="h-full w-full bg-white p-6 text-black19">
			<div className=" flex justify-between">
				<img src={level4} className=" h-16 w-16" />
				<div className="flex flex-col justify-end text-end">
					<p className="text-xl font-bold">
						{rank}위 {regionName}
					</p>
					<p className=" mt-2 text-sm text-primary">최고급 호텔</p>
				</div>
			</div>
			<div className="mt-8 flex flex-row  align-bottom">
				<p className="flex text-xl">{score}점</p>
				<p className=" flex pl-2 pt-3 text-xs text-green-500">+{scoreIncrease}점</p>
			</div>
			<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
			<p className=" text-xs">
				MVP <span className=" text-primary">{mvpId}</span>
			</p>
		</div>
	);
}
