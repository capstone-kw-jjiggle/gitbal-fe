import Divider from '@components/Divider';
import MainContainer from '@components/MainContainer';
import { MySchoolCard, SchoolWinnerCard } from '@components/Cards';
import RankTitle from '@components/RankTitle';
import MyProfile from '@components/MyProfile';

import Pagination from '@/pages/SchoolPage/components/Pagination';
import SchoolRankList from '@/pages/SchoolPage/components/SchoolRankList';

export default function SchoolPage() {
	return (
		<>
			<MainContainer>
				<div className="mt-8 flex w-full items-start justify-between text-black19">
					<div className="flex w-1/2 flex-col">
						<RankTitle title={'학교 랭킹'} daysLeft={'100'} />
						<MyProfile />
					</div>
					<MySchoolCard />
				</div>
				<SchoolWinnerCard />
			</MainContainer>
			<Divider />
			<MainContainer>
				<div className="mt-8 flex w-full items-center justify-between ">
					<Pagination />
					<div className="w-1/3">
						<input
							className="h-12 w-full rounded-lg border-2 border-greyD9 px-4 py-2 text-sm"
							type="text"
							placeholder="github ID"
						/>
					</div>
				</div>
				<SchoolRankList />
			</MainContainer>
		</>
	);
}