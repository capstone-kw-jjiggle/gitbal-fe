import TableItem from '../TableItem';
import { rankList } from '../_data/mock';

export default function TableItemGroup() {
	return (
		<tbody>
			{rankList.map((user) => (
				<TableItem key={user.rank} rank={user.rank} userId={user.userId} level={user.level} score={user.score} />
			))}
		</tbody>
	);
}
