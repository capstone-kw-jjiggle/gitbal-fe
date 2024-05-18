export default function SettingItem({ title, content, SettingButton }) {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h2 className="mb-1 text-lg font-bold">{title}</h2>
				<p className="text-sm text-grey69">{content}</p>
			</div>
			{SettingButton}
		</div>
	);
}
