import UserRankItem from '@/pages/MainPage/components/UserRankItem';

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
