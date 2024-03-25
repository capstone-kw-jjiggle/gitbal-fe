import Logo from '@components/Logo/Logo';
import Navigation from '@/layout/MainLayout/Header/Navigation';
import Profile from '@/layout/MainLayout/Header/Profile';

export default function Header() {
	return (
		<header className=" h-18 flex flex-row items-center justify-between bg-white ">
			<div className="flex flex-row items-center justify-start">
				<Logo />
				<Navigation />
			</div>
			<div className="flex flex-row items-center justify-start">
				<Profile />
			</div>
		</header>
	);
}
