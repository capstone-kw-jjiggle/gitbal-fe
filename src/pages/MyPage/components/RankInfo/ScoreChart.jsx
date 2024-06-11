import { BarChart, Bar, LabelList, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function ScoreChart({ data, isLanguage }) {
	if (data === undefined) return <div>기달려</div>;

	const transformData = (data) => {
		return data.map((item) => {
			const transformedItem = {};

			Object.keys(item).forEach((key) => {
				if (key.toLowerCase().includes('name')) {
					transformedItem.name = item[key];
				} else if (key.toLowerCase().includes('score') || key.toLocaleLowerCase().includes('percent')) {
					transformedItem.score = item[key];
				}
			});

			return transformedItem;
		});
	};

	const chartData = transformData(data);

	const scoreFormatter = (value) => {
		return value.toLocaleString();
	};

	const percentFormatter = (value) => {
		return value * 100 + '%';
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				layout="vertical"
				width="100%"
				height="100%"
				data={chartData}
				margin={{
					top: 20,
					right: 80,
					left: 40,
					bottom: 20,
				}}>
				<XAxis type="number" hide />
				<YAxis dataKey="name" type="category" axisLine={false} tickLine={false} fontSize={12} />
				<Bar dataKey="score" fill="#696969" barSize={8}>
					<LabelList
						dataKey="score"
						position="right"
						fontSize={12}
						formatter={isLanguage ? percentFormatter : scoreFormatter}
					/>
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
}
