import SchoolRankItem from '@/pages/SchoolPage/components/SchoolRankItem';

export default function SchoolRankList({ schoolRankList }) {
	return (
		<div className="flex w-full flex-col gap-4">
			{schoolRankList.map((item) => (
				<SchoolRankItem
					key={item.schoolName}
					rank={item.schoolRank}
					schoolName={item.schoolName}
					score={item.schoolScore}
					mvpId={item.topContributorName}
					scoreIncrease={item.schoolChangedScore}
					level={item.schoolGrade}
				/>
			))}
		</div>
	);
}
