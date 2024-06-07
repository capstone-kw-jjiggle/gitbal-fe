import level2 from '@/assets/images/regionLevel/regionLevel2.svg';

export default function RegionRank3rd({ regionRank, rank }) {
	const { regionlName, regionScore, regionChangedScore, topContributorName } = regionRank;
	return (
		<div className="w-1/3">
			<div className="h-full w-full px-6 py-7 text-black19">
				<div className=" flex justify-between">
					<img src={level2} className=" h-14 w-14" />
					<div className="flex flex-col justify-end text-end">
						<p className="text-xl font-bold">
							{rank}위 {regionlName}
						</p>
						<p className=" mt-2 text-sm text-primary">컴튼</p>
					</div>
				</div>
				<div className="mt-8 flex flex-col  justify-between align-bottom">
					<p className=" flex text-xs text-green-500">+{regionChangedScore.toLocaleString()}점</p>
					<p className="flex text-xl">{regionScore.toLocaleString()}점</p>
				</div>
				<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
				<p className=" text-xs">
					MVP <span className=" text-primary">{topContributorName}</span>
				</p>
			</div>
		</div>
	);
}
