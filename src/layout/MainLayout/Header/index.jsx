import logo from '../../../assets/images/logo/logoEN.svg';
import Logo from '../../../components/Logo/Logo';
import Navigation from './Navigation';
import Profile from './Profile';

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
