export default function RankTitle({ title, daysLeft }) {
	return (
		<div className="mb-5 flex items-baseline justify-start">
			<h2 className="text-3xl font-extrabold text-primary">{title}</h2>
			<p className="ml-2 text-lg font-semibold">시즌 {daysLeft}일 남음</p>
		</div>
	);
}
