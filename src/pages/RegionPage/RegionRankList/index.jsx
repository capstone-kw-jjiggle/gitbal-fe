import { regionRankData } from './_data/mock';
import RegionRank1st from './components/RegionRank1st';
import RegionRank2nd from './components/RegionRank2nd';
import RegionRank3rd from './components/RegionRank3rd';
import RegionRank4th from './components/RegionRank4th';
import RegionRank5th from './components/RegionRank5th';
import RegionRankDivider from './components/RegionRankDivider';

function regionRankDataProps(data) {
	return {
		rank: data.rank,
		regionName: data.regionName,
		score: data.score,
		scoreIncrease: data.scoreIncrease,
		mvpId: data.mvpId,
	};
}

const 랭크에따른컴포넌트 = {
	레벨1: <RegionRank1st />,
	레벨2: <RegionRank2nd />,
	레벨3: <RegionRank3rd />,
	레벨4: <RegionRank4th />,
	레벨5: <RegionRank5th />,
};

export default function RegionRankList() {
	const rankData = [];

	for (let i = 1; i <= 11; i++) {
		rankData[i] = regionRankData.filter((data) => data.rank === i)[0];
	}

	return (
		<>
			<div className="mt-8 ">
				{/* 1열 */}
				<RegionRank1st {...regionRankDataProps(rankData[1])} />

				{/* 2열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded  bg-white shadow-xl">
					<RegionRank2nd {...regionRankDataProps(rankData[2])} />
					<RegionRankDivider />
					<RegionRank2nd {...regionRankDataProps(rankData[3])} />
				</div>

				{/* 3열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank3rd {...regionRankDataProps(rankData[4])} />
					<RegionRankDivider />
					<RegionRank3rd {...regionRankDataProps(rankData[5])} />
					<RegionRankDivider />
					<RegionRank3rd {...regionRankDataProps(rankData[6])} />
				</div>

				{/* 4열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank4th {...regionRankDataProps(rankData[7])} />
					<RegionRankDivider />
					<RegionRank4th {...regionRankDataProps(rankData[8])} />
					<RegionRankDivider />
					<RegionRank4th {...regionRankDataProps(rankData[9])} />

					<RegionRank4th {...regionRankDataProps(rankData[10])} />
				</div>

				{/* 5열 */}
				<div className="mt-4 flex h-28 w-full flex-row rounded bg-white shadow-xl">
					<RegionRank5th {...regionRankDataProps(rankData[11])} />
				</div>
			</div>
		</>
	);
}
