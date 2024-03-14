export default function TableItem({ rank, name, level, score }) {
	return (
		<tr className="h-14 border border-greyD9 text-center text-lg hover:bg-gray-100">
			<td>{rank}</td>
			<td>{name}</td>
			<td>{level}</td>
			<td>{score.toLocaleString()}</td>
		</tr>
	);
}
