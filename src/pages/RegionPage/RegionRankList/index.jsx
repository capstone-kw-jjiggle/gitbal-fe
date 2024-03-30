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
	const rankData = {};

	for (let i = 1; i <= 10; i++) {
		rankData[i] = regionRankData.filter((data) => data.rank === i);
	}

	return (
		<>
			<div className="mt-8 ">
				{/* 1열 */}
				<div className=" h-56 w-full rounded bg-white shadow-xl">
					{rankData[1].map((data) => (
						<div key={data.rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank1st {...regionRankDataProps(data)} />
						</div>
					))}
				</div>
				{/* 2열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded  bg-white shadow-xl">
					<div className=" w-1/2 ">
						{rankData[2].map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank2nd {...regionRankDataProps(data)} />
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className=" w-1/2 ">
						{rankData[3].map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank2nd {...regionRankDataProps(data)} />
							</div>
						))}
					</div>
				</div>
				{/* 3열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<div className="w-1/3">
						{rankData[4].map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank3rd {...regionRankDataProps(data)} />
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/3">
						{rankData[5].map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank3rd {...regionRankDataProps(data)} />
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/3">
						{rankData[6].map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank3rd {...regionRankDataProps(data)} />
							</div>
						))}
					</div>
				</div>
				{/* 4열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<div className="w-1/4">
						{rankData[7].map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank4th {...regionRankDataProps(data)} />
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className=" w-1/4">
						{rankData[8].map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank4th {...regionRankDataProps(data)} />
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/4">
						{rankData[9].map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank4th {...regionRankDataProps(data)} />
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/4">
						{rankData[10].map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank4th {...regionRankDataProps(data)} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
