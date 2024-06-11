import shortcutIcon from '@/assets/images/ShareButton.svg';

export default function Shortcut({ githubID }) {
	const handleClick = () => {
		// 크롬에서는 _blank를 안붙여도 기본으로 새창에서 열리지만 다른 브라우저에서는 아닐 수 있기 때문에 명시
		window.open(`https://www.github.com/${githubID}`, '_blank');
	};

	return (
		<button onClick={handleClick} className="flex items-center">
			<img src={shortcutIcon} />
			<p className="ml-1 text-sm font-thin text-grey69">내 GitHub 바로가기</p>
		</button>
	);
}
