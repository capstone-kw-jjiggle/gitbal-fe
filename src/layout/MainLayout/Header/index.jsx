import Logo from '@components/Logo/Logo';
import Navigation from '@/layout/MainLayout/Header/Navigation';
import { SmallProfileImage } from '@/components/ProfileImage/SmallProfileImage';
import { useGetUserInfo } from '@/api/auth/query';
import useAuthStore from '@/stores/authStore';

export default function Header() {
	const { isLoggedIn } = useAuthStore();
	const { data: userInfoData } = useGetUserInfo({ enabled: isLoggedIn });
	const imgURL = userInfoData?.data?.imgUrl || '';

	return (
		<header className=" h-18 flex flex-row items-center justify-between  ">
			<div className="flex flex-row items-center justify-start">
				<Logo />
				<Navigation />
			</div>
			<div className="flex flex-row items-center justify-start">
				<SmallProfileImage imageURL={imgURL} />
			</div>
		</header>
	);
}
