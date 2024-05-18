import SchoolRankItem from '@/pages/SchoolPage/components/SchoolRankItem';
import { schoolRankData } from '@/pages/SchoolPage/data/mock';

export default function SchoolRankList() {
	return (
		<div className="mt-12 flex w-full flex-col gap-4">
			{schoolRankData.map((item) => (
				<SchoolRankItem
					key={item.rank}
					rank={item.rank}
					schoolName={item.schoolName}
					score={item.score}
					mvpId={item.mvpId}
					scoreIncrease={item.scoreIncrease}
					level={item.level}
				/>
			))}
		</div>
	);
}
