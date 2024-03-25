import SchoolRankItem from './SchoolRankItem';
import { schoolRankData } from './_data/mock';

export default function SchoolRankList() {
	return (
		<div className="mx-auto mt-12 flex w-11/12 flex-col gap-4">
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
