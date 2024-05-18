import { SmallProfileImage } from '@components/ProfileImage/SmallProfileImage';

import ChartCard from '@/pages/MyPage/components/RankInfo/ChartCard';
import LanguageCard from '@/pages/MyPage/components/RankInfo/LanguageCard';
import level1 from '@/assets/images/userLevel/userLevel1.svg';
import level2 from '@/assets/images/userLevel/userLevel2.svg';

export default function RankInfo() {
	return (
		<>
			<div className="mt-12 flex flex-col gap-2">
				<h2 className="text-3xl font-extrabold">나의 레벨</h2>
				<p className="text-xl">int MyScore = commit + pull request + like</p>
				<p className="text-xl">10000 = 8000 + 1000 + 1000</p>
			</div>
			<div className="flex flex-col">
				<div className="relative mt-24 h-10 w-full rounded-lg bg-gray-200">
					<div
						style={{ '--dynamic-width': '50%' }}
						className="relative h-full w-1/2 animate-dynamicWidth rounded-lg bg-primary">
						<div className="absolute -top-10 right-0">
							<SmallProfileImage />
						</div>
					</div>

					<div className="absolute -top-10 left-0">
						<img src={level1} className="h-8 w-8" />
					</div>

					<div className="absolute -top-10 right-0">
						<img src={level2} className="h-8 w-8" />
					</div>
				</div>
				<p className="mt-2 text-end text-sm font-bold text-grey69">NEXT RANK 52/100</p>
			</div>
			<div className="mb-16 mt-8 flex flex-col">
				<h2 className="text-3xl font-extrabold">나와 함께 달리고 있는 사람들</h2>
				<div className="relative mt-24 h-10 w-full rounded-lg bg-gray-200">
					<div className="absolute h-full w-1/3 rounded-lg">
						<div className="absolute -top-10 right-0">
							<SmallProfileImage />
						</div>
					</div>
					<div
						style={{ '--dynamic-width': '50%' }}
						className="absolute h-full w-1/2 animate-dynamicWidth rounded-lg bg-primary">
						<div className="absolute -top-10 right-0">
							<SmallProfileImage />
						</div>
					</div>
					<div className="absolute h-full w-9/12 rounded-lg ">
						<div className="absolute -top-10 right-0">
							<SmallProfileImage />
						</div>
					</div>
					<div className="absolute h-full w-3/12 rounded-lg ">
						<div className="absolute -top-10 right-0">
							<SmallProfileImage />
						</div>
					</div>
				</div>
			</div>
			<ChartCard title={'school'} name={'광운대학교'} rank={1} />
			<ChartCard title={'region'} name={'경기도'} rank={1} />
			<LanguageCard name={'Java Script'} />
			<div className="h-76 mb-8 flex w-full flex-col rounded-2xl border border-gray-200 p-4 text-black19 shadow-lg">
				<h2 className="mb-12 text-xl font-extrabold">모내기 2024 시즌</h2>
				<img className="mb-8 w-full" src={'https://ghchart.rshah.org/1050ff/suwonthugger'} alt="깃허브 모내기 사진" />
			</div>
		</>
	);
}
