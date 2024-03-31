import RegionRank1st from './RegionRank1st';
import RegionRank2nd from './RegionRank2nd';
import RegionRank3rd from './RegionRank3rd';
import RegionRank4th from './RegionRank4th';
import { regionRankData } from './_data/mock';

function regionRankDataProps(data) {
	return {
		rank: data.rank,
		regionName: data.regionName,
		score: data.score,
		scoreIncrease: data.scoreIncrease,
		mvpId: data.mvpId,
	};
}

export default function RegionRankList() {
	const rankData = [];

	for (let i = 1; i <= 10; i++) {
		rankData[i] = regionRankData.filter((data) => data.rank === i)[0];
	}

	return (
		<>
			<div className="mt-8 ">
				{/* 1열 */}
				<div className=" h-56 w-full rounded bg-white shadow-xl">
					<div key={rankData[1].rank}>
						{/* 다른 필드들도 필요에 맞게 표시 */}
						<RegionRank1st {...regionRankDataProps(rankData[1])} />
					</div>
				</div>

				{/* 2열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded  bg-white shadow-xl">
					<div className=" w-1/2 ">
						<div key={rankData[2].rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank2nd {...regionRankDataProps(rankData[2])} />
						</div>
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className=" w-1/2 ">
						<div key={rankData[3].rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank2nd {...regionRankDataProps(rankData[3])} />
						</div>
					</div>
				</div>

				{/* 3열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<div className="w-1/3">
						<div key={rankData[4].rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank3rd {...regionRankDataProps(rankData[4])} />
						</div>
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/3">
						<div key={rankData[5].rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank3rd {...regionRankDataProps(rankData[5])} />
						</div>
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/3">
						<div key={rankData[6].rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank3rd {...regionRankDataProps(rankData[6])} />
						</div>
					</div>
				</div>

				{/* 4열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<div className="w-1/4">
						<div key={rankData[7].rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank4th {...regionRankDataProps(rankData[7])} />
						</div>
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className=" w-1/4">
						<div key={rankData[8].rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank4th {...regionRankDataProps(rankData[8])} />
						</div>
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/4">
						<div key={rankData[9].rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank4th {...regionRankDataProps(rankData[9])} />
						</div>
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/4">
						<div key={rankData[10].rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank4th {...regionRankDataProps(rankData[10])} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
