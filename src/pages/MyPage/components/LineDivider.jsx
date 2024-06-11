import LineButton from '@/pages/MyPage/components/LineButton';

export default function LineDivider({ currentMenu, onClick, menus }) {
	return (
		<div className="flex items-end">
			<hr className="w-1/5 border-b-2 border-greyBD" />
			<div className="mx-auto flex w-3/5 items-end">
				{menus.map((menu) => (
					<LineButton key={menu} 이름={menu} 선택여부={currentMenu === menu} onClick={onClick} />
				))}
				<hr className="w-9/12 border-b-2 border-greyBD" />
			</div>
			<hr className="w-1/5 border-b-2 border-greyBD" />
		</div>
	);
}
