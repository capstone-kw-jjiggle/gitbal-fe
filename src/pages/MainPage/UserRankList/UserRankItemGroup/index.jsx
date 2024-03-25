import UserRankItem from '../UserRankItem';
import { rankList } from '../_data/mock';

export default function UserRankItemGroup() {
	return (
		<tbody>
			{rankList.map((user) => (
				<UserRankItem key={user.rank} rank={user.rank} userId={user.userId} level={user.level} score={user.score} />
			))}
		</tbody>
	);
}
