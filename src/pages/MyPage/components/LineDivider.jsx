import LineButton from '@/pages/MyPage/components/LineButton';

const 버튼종류 = ['RANK', '칭호', '설정'];

export default function LineDivider({ 현재선택된버튼, onClick }) {
	return (
		<div className="flex items-end">
			<hr className="w-1/5 border-b-2 border-greyBD" />
			<div className="mx-auto flex w-3/5 items-end">
				{버튼종류.map((버튼) => (
					<LineButton key={버튼} 이름={버튼} 선택여부={현재선택된버튼 === 버튼} onClick={onClick} />
				))}
				<hr className="w-9/12 border-b-2 border-greyBD" />
			</div>
			<hr className="w-1/5 border-b-2 border-greyBD" />
		</div>
	);
}
