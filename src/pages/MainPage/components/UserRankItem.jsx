import level1 from '@/assets/images/userLevel/userLevel1.svg';
import level2 from '@/assets/images/userLevel/userLevel2.svg';
import level3 from '@/assets/images/userLevel/userLevel3.svg';
import level4 from '@/assets/images/userLevel/userLevel4.svg';
import level5 from '@/assets/images/userLevel/userLevel5.svg';
import level6 from '@/assets/images/userLevel/userLevel6.svg';

export default function UserRankItem({ rank, userId, level, score }) {
	let imageUrl;

	switch (level) {
		case 1:
			imageUrl = level1;
			break;
		case 2:
			imageUrl = level2;
			break;
		case 3:
			imageUrl = level3;
			break;
		case 4:
			imageUrl = level4;
			break;
		case 5:
			imageUrl = level5;
			break;
		case 6:
			imageUrl = level6;
			break;
		default:
			imageUrl = level1;
	}

	let trClass = 'h-14 border border-greyD9 text-center text-lg hover:bg-blue-100';
	if (rank % 2 === 0) trClass += ' bg-greyF5';

	return (
		<tr className={trClass}>
			<td>{rank}</td>
			<td>{userId}</td>
			<td className="flex h-14 items-center justify-center">
				<img src={imageUrl} className="h-8 w-8" />
			</td>
			<td>{score.toLocaleString()}</td>
		</tr>
	);
}
