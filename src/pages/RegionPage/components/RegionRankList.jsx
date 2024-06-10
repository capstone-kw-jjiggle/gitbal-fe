import RegionRank1st from '@/pages/RegionPage/components/RegionRank1st';
import RegionRank2nd from '@/pages/RegionPage/components/RegionRank2nd';
import RegionRank3rd from '@/pages/RegionPage/components/RegionRank3rd';
import RegionRank4th from '@/pages/RegionPage/components/RegionRank4th';
import RegionRank5th from '@/pages/RegionPage/components/RegionRank5th';
import RegionRankDivider from '@/pages/RegionPage/components/RegionRankDivider';

export default function RegionRankList({ regionRankList }) {
	const { regionlName, regionScore, regionChangedScore, topContributorName } = regionRankList[0];

	return (
		<>
			<div className="mt-8 ">
				{/* 1열 */}
				<div className=" mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank1st regionRank={regionRankList[0]} rank={1} />
				</div>

				{/* 2열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded  bg-white shadow-xl">
					<RegionRank2nd regionRank={regionRankList[1]} rank={2} />
					<RegionRankDivider />
					<RegionRank2nd regionRank={regionRankList[2]} rank={3} />
				</div>

				{/* 3열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank3rd regionRank={regionRankList[3]} rank={4} />
					<RegionRankDivider />
					<RegionRank3rd regionRank={regionRankList[4]} rank={5} />
					<RegionRankDivider />
					<RegionRank3rd regionRank={regionRankList[5]} rank={6} />
				</div>

				{/* 4열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank4th regionRank={regionRankList[6]} rank={7} />
					<RegionRankDivider />
					<RegionRank4th regionRank={regionRankList[7]} rank={8} />
					<RegionRankDivider />
					<RegionRank4th regionRank={regionRankList[8]} rank={9} />
					<RegionRankDivider />
					<RegionRank4th regionRank={regionRankList[9]} rank={10} />
				</div>

				{/* 5열 */}
				{/* <div className="mt-4 flex h-28 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank5th regionRank={regionRankList[10]} rank={11} />
				</div> */}
			</div>
		</>
	);
}
