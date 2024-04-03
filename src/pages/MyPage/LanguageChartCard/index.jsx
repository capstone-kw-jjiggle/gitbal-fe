import ScoreChart from '../ScoreChart';

export default function LanguageChartCard({ name }) {
	return (
		<div className="border-gray-200px-4 mb-8 flex w-full items-center rounded-2xl border p-4 text-black19 shadow-lg">
			<div className="flex h-60 w-5/12 flex-col">
				<div className="flex w-full">
					<h2 className="text-xl font-extrabold">사용언어</h2>
				</div>
				<div className="flex w-full items-center justify-center py-16">
					<h2 className="text-5xl font-extrabold">{name}</h2>
				</div>
			</div>
			<div className="flex h-60 w-7/12">
				<ScoreChart />
			</div>
		</div>
	);
}
