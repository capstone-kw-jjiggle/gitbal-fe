import UserRankItem from '@/pages/MainPage/components/UserRankItem';
import { rankList } from '@/pages/MainPage/data/mock';

export default function UserRankItemGroup() {
	return (
		<tbody>
			{rankList.map((user) => (
				<UserRankItem key={user.rank} rank={user.rank} userId={user.userId} level={user.level} score={user.score} />
			))}
		</tbody>
	);
}
