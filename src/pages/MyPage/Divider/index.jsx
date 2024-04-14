import LineButton from './LineButton';

export default function Divider() {
	return (
		<div className="flex items-end">
			<hr className="w-1/5 border-b-2 border-greyBD" />
			<div className="mx-auto flex w-3/5 items-end">
				<LineButton title={'RANK'} />
				<LineButton title={'칭호'} />
				<LineButton title={'설정'} />
				<hr className="w-9/12 border-b-2 border-greyBD" />
			</div>
			<hr className="w-1/5 border-b-2 border-greyBD" />
		</div>
	);
}
