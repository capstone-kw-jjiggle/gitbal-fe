import { regionRankData } from '../_data/mock';
import RegionRank1st from './RegionRank1st';
import RegionRank2nd from './RegionRank2nd';
import RegionRank3rd from './RegionRank3rd';
import RegionRank4th from './RegionRank4th';
import RegionRank5th from './RegionRank5th';
import RegionRankDivider from './RegionRankDivider';

export default function RegionRankList() {
	return (
		<>
			<div className="mt-8 ">
				{/* 1열 */}
				<div className=" mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank1st {...regionRankData[0]} />
				</div>

				{/* 2열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded  bg-white shadow-xl">
					<RegionRank2nd {...regionRankData[1]} />
					<RegionRankDivider />
					<RegionRank2nd {...regionRankData[2]} />
				</div>

				{/* 3열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank3rd {...regionRankData[3]} />
					<RegionRankDivider />
					<RegionRank3rd {...regionRankData[4]} />
					<RegionRankDivider />
					<RegionRank3rd {...regionRankData[5]} />
				</div>

				{/* 4열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank4th {...regionRankData[6]} />
					<RegionRankDivider />
					<RegionRank4th {...regionRankData[7]} />
					<RegionRankDivider />
					<RegionRank4th {...regionRankData[8]} />
					<RegionRankDivider />
					<RegionRank4th {...regionRankData[9]} />
				</div>

				{/* 5열 */}
				<div className="mt-4 flex h-28 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank5th {...regionRankData[10]} />
				</div>
			</div>
		</>
	);
}
