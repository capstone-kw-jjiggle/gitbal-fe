import shortcutIcon from '@/assets/images/ShareButton.svg';

export default function Shortcut() {
	return (
		<div className="flex items-center">
			<img src={shortcutIcon} />
			<p className="ml-1 text-sm font-thin text-grey69">내 GitHub 바로가기</p>
		</div>
	);
}
