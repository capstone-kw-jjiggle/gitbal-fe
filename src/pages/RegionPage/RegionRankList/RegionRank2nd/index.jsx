import level3 from './../../../../assets/images/regionLevel/regionLevel3.svg';

export default function RegionRank2nd({ rank, regionName, score, scoreIncrease, mvpId }) {
	return (
		<div className="h-full w-full px-6 py-7 text-black19">
			<div className=" flex justify-between">
				<img src={level3} className=" h-18 w-12" />
				<div className="flex flex-col justify-end text-end">
					<p className="text-xl font-bold">
						{rank}위 {regionName}
					</p>
					<p className=" mt-2 text-sm text-primary">반포 자이</p>
				</div>
			</div>
			<div className="mt-6 flex flex-row  justify-between align-bottom">
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
