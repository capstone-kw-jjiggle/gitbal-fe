import CurrentTitleBox from '@/pages/MyPage/components/TitleInfo/CurrentTitleBox';
import TitleStatus from '@/pages/MyPage/components/TitleInfo/TitleStatus';
import TitleInfoButton from '@/pages/MyPage/components/TitleInfo/TItleInfoButton';

export default function TitleInfo() {
	return (
		<div className="mt-9">
			<div className="flex gap-8">
				<CurrentTitleBox />
				<CurrentTitleBox />
			</div>
			<div className="flex items-center justify-between">
				<p className="text-grey69">칭호 조합 시스템: 칭호1과 칭호2를 선택해주세요 2개의 칭호가 조합되어 있습니다.</p>
				<div className="flex gap-3">
					<TitleInfoButton>저장</TitleInfoButton>
					<TitleInfoButton>취소</TitleInfoButton>
				</div>
			</div>
			<div className="mt-9">
				<TitleStatus />
			</div>
		</div>
	);
}
