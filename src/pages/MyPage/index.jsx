import Divider from '@/pages/MyPage/Divider';
import MainContainer from '@components/MainContainer';
import MyProfile from '@components/MyProfile';
import Shortcut from '@/pages/MyPage/Shortcut';
import level1 from '@/assets/images/userLevel/userLevel1.svg';
import level2 from '@/assets/images/userLevel/userLevel2.svg';
import { SmallProfileImage } from '../../components/ProfileImage/SmallProfileImage';

export default function MyPage() {
	return (
		<>
			<MainContainer>
				<div className="mt-16 flex items-center justify-between">
					<MyProfile />
					<Shortcut />
				</div>
			</MainContainer>
			<Divider />
			<MainContainer>
				<div className="mt-12 flex flex-col gap-2">
					<h2 className="text-3xl font-extrabold">나의 레벨</h2>
					<p className="text-xl">int MyScore = commit + pull request + like</p>
					<p className="text-xl">10000 = 8000 + 1000 + 1000</p>
				</div>
				<div className="flex flex-col">
					<div className="relative mt-24 h-10 w-full rounded-lg bg-gray-200">
						<div className="relative h-full w-1/2 rounded-lg bg-primary">
							<div className="absolute -top-10 right-0">
								<SmallProfileImage />
							</div>
						</div>

						<div className="absolute -top-10 left-0">
							<img src={level1} className="h-8 w-8" />
						</div>

						<div className="absolute -top-10 right-0">
							<img src={level2} className="h-8 w-8" />
						</div>
					</div>
				</div>
			</MainContainer>
		</>
	);
}
