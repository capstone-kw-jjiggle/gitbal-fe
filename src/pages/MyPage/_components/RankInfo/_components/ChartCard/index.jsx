import ScoreChart from '@/pages/MyPage/_components/RankInfo/_components/ScoreChart';

export default function ChartCard({ title, name, rank }) {
	return (
		<div className="h-76 mb-8 flex w-full items-center rounded-2xl border border-gray-200 p-4 text-black19 shadow-lg">
			<div className="flex h-60 w-5/12 flex-col">
				<div className="flex w-full gap-2 ">
					<h2 className="text-xl font-extrabold uppercase">{title}</h2>
					<span className="text-xl font-extrabold text-grey69">{name}</span>
				</div>
				<div className="flex w-full items-center justify-center py-16">
					<h2 className="text-5xl font-extrabold">{rank}등</h2>
				</div>
			</div>
			<div className="flex h-60 w-7/12">
				<ScoreChart />
			</div>
		</div>
	);
}
