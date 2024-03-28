import RegionRank1st from './RegionRank1st';
import RegionRank2nd from './RegionRank2nd';
import RegionRank3rd from './RegionRank3rd';
import RegionRank4th from './RegionRank4th';
import { regionRankData } from './_data/mock';

export default function RegionRankList() {
	// rank가 1인 데이터를 출력
	const rankOneData = regionRankData.filter((data) => data.rank === 1);
	// rank가 2인 데이터를 출력
	const rankTwoData = regionRankData.filter((data) => data.rank === 2);
	// rank가 3인 데이터를 출력
	const rankThreeData = regionRankData.filter((data) => data.rank === 3);
	// rank가 4인 데이터를 출력
	const rankFourData = regionRankData.filter((data) => data.rank === 4);
	// rank가 5인 데이터를 출력
	const rankFiveData = regionRankData.filter((data) => data.rank === 5);
	// rank가 6인 데이터를 출력
	const rankSixData = regionRankData.filter((data) => data.rank === 6);
	// rank가 7인 데이터를 출력
	const rankSevenData = regionRankData.filter((data) => data.rank === 7);
	// rank가 8인 데이터를 출력
	const rankEightData = regionRankData.filter((data) => data.rank === 8);
	// rank가 9인 데이터를 출력
	const rankNineData = regionRankData.filter((data) => data.rank === 9);
	// rank가 10인 데이터를 출력
	const rankTenData = regionRankData.filter((data) => data.rank === 10);

	return (
		<>
			<div className="mt-8 ">
				{/* 1열 */}
				<div className=" h-56 w-full rounded bg-white shadow-xl">
					{rankOneData.map((data) => (
						<div key={data.rank}>
							{/* 다른 필드들도 필요에 맞게 표시 */}
							<RegionRank1st
								rank={data.rank}
								regionName={data.regionName}
								score={data.score}
								scoreIncrease={data.scoreIncrease}
								mvpId={data.mvpId}
							/>
						</div>
					))}
				</div>
				{/* 2열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded  bg-white shadow-xl">
					<div className=" w-1/2 ">
						{rankTwoData.map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank2nd
									rank={data.rank}
									regionName={data.regionName}
									score={data.score}
									scoreIncrease={data.scoreIncrease}
									mvpId={data.mvpId}
								/>
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className=" w-1/2 ">
						{rankThreeData.map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank2nd
									rank={data.rank}
									regionName={data.regionName}
									score={data.score}
									scoreIncrease={data.scoreIncrease}
									mvpId={data.mvpId}
								/>
							</div>
						))}
					</div>
				</div>
				{/* 3열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<div className="w-1/3">
						{rankFourData.map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank3rd
									rank={data.rank}
									regionName={data.regionName}
									score={data.score}
									scoreIncrease={data.scoreIncrease}
									mvpId={data.mvpId}
								/>
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/3">
						{rankFiveData.map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank3rd
									rank={data.rank}
									regionName={data.regionName}
									score={data.score}
									scoreIncrease={data.scoreIncrease}
									mvpId={data.mvpId}
								/>
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/3">
						{rankSixData.map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank3rd
									rank={data.rank}
									regionName={data.regionName}
									score={data.score}
									scoreIncrease={data.scoreIncrease}
									mvpId={data.mvpId}
								/>
							</div>
						))}
					</div>
				</div>
				{/* 4열 */}
				<div className="mt-4 flex h-56 w-full flex-row rounded bg-white shadow-xl">
					<div className="w-1/4">
						{rankSevenData.map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank4th
									rank={data.rank}
									regionName={data.regionName}
									score={data.score}
									scoreIncrease={data.scoreIncrease}
									mvpId={data.mvpId}
								/>
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className=" w-1/4">
						{rankEightData.map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank4th
									rank={data.rank}
									regionName={data.regionName}
									score={data.score}
									scoreIncrease={data.scoreIncrease}
									mvpId={data.mvpId}
								/>
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/4">
						{rankNineData.map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank4th
									rank={data.rank}
									regionName={data.regionName}
									score={data.score}
									scoreIncrease={data.scoreIncrease}
									mvpId={data.mvpId}
								/>
							</div>
						))}
					</div>
					<div className="my-auto h-48 w-[2px] rounded bg-greyBD"></div>
					<div className="w-1/4">
						{rankTenData.map((data) => (
							<div key={data.rank}>
								{/* 다른 필드들도 필요에 맞게 표시 */}
								<RegionRank4th
									rank={data.rank}
									regionName={data.regionName}
									score={data.score}
									scoreIncrease={data.scoreIncrease}
									mvpId={data.mvpId}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
