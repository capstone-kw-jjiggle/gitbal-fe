import level1 from '@/assets/images/userLevel/userLevel1.svg';
import level2 from '@/assets/images/userLevel/userLevel2.svg';
import level3 from '@/assets/images/userLevel/userLevel3.svg';
import level4 from '@/assets/images/userLevel/userLevel4.svg';
import level5 from '@/assets/images/userLevel/userLevel5.svg';
import level6 from '@/assets/images/userLevel/userLevel6.svg';

export default function SchoolRankItem({ rank, schoolName, score, mvpId, scoreIncrease, level }) {
	let imageUrl;

	switch (level) {
		case 'YELLOW':
			imageUrl = level1;
			break;
		case 'GREEN':
			imageUrl = level2;
			break;
		case 'BLUE':
			imageUrl = level3;
			break;
		case 'RED':
			imageUrl = level4;
			break;
		case 'GREY':
			imageUrl = level5;
			break;
		case 'PURPLE':
			imageUrl = level6;
			break;
		default:
			imageUrl = level1;
	}

	return (
		<div className="flex w-full items-center justify-between rounded-2xl border border-gray-200 px-12 py-3 text-black19 shadow-lg">
			<p className="text-2xl font-extrabold">{rank}위</p>
			<div className="flex w-1/2 ">
				<div className="mt-3 flex w-full flex-col">
					<div className="flex justify-between text-xl">
						<p className="font-bold">{schoolName}</p>
						<p>{score.toLocaleString()}점</p>
					</div>
					<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
					<div className="flex justify-end text-sm">
						<p>MVP</p>
						<p className="ml-4 text-primary">{mvpId}</p>
					</div>
				</div>
			</div>
			<div className="text-sm">
				<p>학교 점수 상승</p>
				<p className="text-green-500">+{scoreIncrease.toLocaleString()}점</p>
			</div>
			<div>
				<img src={imageUrl} className="ml-2 h-14 w-14" />
			</div>
		</div>
	);
}
