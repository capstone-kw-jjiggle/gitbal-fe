import Logo from '@components/Logo/Logo';
import Navigation from '@/layout/MainLayout/Header/Navigation';
import { SmallProfileImage } from '@/components/ProfileImage/SmallProfileImage';

export default function Header() {
	return (
		<header className=" h-18 flex flex-row items-center justify-between  ">
			<div className="flex flex-row items-center justify-start">
				<Logo />
				<Navigation />
			</div>
			<div className="flex flex-row items-center justify-start">
				<SmallProfileImage />
			</div>
		</header>
	);
}
