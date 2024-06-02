import SchoolRankItem from '@/pages/SchoolPage/components/SchoolRankItem';
import { schoolRankData } from '@/pages/SchoolPage/data/mock';

export default function SchoolRankList({ schoolRankList }) {
	console.log(schoolRankList);
	return (
		<div className="mt-12 flex w-full flex-col gap-4">
			{schoolRankList.map((item) => (
				<SchoolRankItem
					key={item.schoolName}
					rank={item.schoolRank}
					schoolName={item.schoolName}
					score={item.schoolScore}
					mvpId={item.topContributorName}
					scoreIncrease={item.schoolChangedScore}
					level={6}
				/>
			))}
		</div>
	);
}
