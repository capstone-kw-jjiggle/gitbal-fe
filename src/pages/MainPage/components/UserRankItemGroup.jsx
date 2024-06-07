import UserRankItem from '@/pages/MainPage/components/UserRankItem';
import { rankList } from '@/pages/MainPage/data/mock';

export default function UserRankItemGroup({ userList }) {
	return (
		<tbody>
			{userList.map((user) => (
				<UserRankItem
					key={user.username}
					rank={user.rank}
					userId={user.username}
					level={user.grade}
					score={user.userscore}
				/>
			))}
		</tbody>
	);
}
