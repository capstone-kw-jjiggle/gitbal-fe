import { BarChart, Bar, LabelList, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: '광운대',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: '세종대',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: '가톨릭대',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: '이화여대',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: '숙명여대',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: '숙명여대',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: '숙명여대',
		uv: 1890,
		pv: 20000,
		amt: 2181,
	},
];

export default function ScoreChart() {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				layout="vertical"
				width="100%"
				height="100%"
				data={data}
				margin={{
					top: 20,
					right: 80,
					left: 40,
					bottom: 20,
				}}>
				<XAxis type="number" hide />
				<YAxis dataKey="name" type="category" axisLine={false} tickLine={false} fontSize={12} />
				<Bar dataKey="pv" fill="#696969" barSize={8}>
					<LabelList dataKey="pv" position="right" fontSize={12} />
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
}
