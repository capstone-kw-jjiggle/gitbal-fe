export default function SettingButton({ title, color = 'bg-primary' }) {
	return <button className={`h-14 w-24 rounded-lg text-lg font-bold text-white ${color}`}>{title}</button>;
}
