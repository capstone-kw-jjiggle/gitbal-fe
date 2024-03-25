import UserRankItemGroup from '@/pages/MainPage/UserRankList/UserRankItemGroup';

export default function UserRankList() {
	return (
		<table className="w-full border-collapse border border-greyD9 text-lg font-light">
			<thead className="h-14">
				<tr className="border border-b-gray-500 font-thin">
					<th className="font-normal">순위</th>
					<th className="font-normal">아이디</th>
					<th className="font-normal">깃발</th>
					<th className="font-normal">점수</th>
				</tr>
			</thead>
			<UserRankItemGroup />
		</table>
	);
}
