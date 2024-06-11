import getLevelImage from '@/utils/getLevelImage';

export default function UserRankItem({ rank, userId, level, score }) {
	const imageURL = getLevelImage(level);

	let trClass = 'h-14 border border-greyD9 text-center text-lg hover:bg-blue-100';
	if (rank % 2 === 0) trClass += ' bg-greyF5';

	return (
		<tr className={trClass}>
			<td>{rank}</td>
			<td>{userId}</td>
			<td className="flex h-14 items-center justify-center">
				<img src={imageURL} className="h-8 w-8" />
			</td>
			<td>{score.toLocaleString()}</td>
		</tr>
	);
}
