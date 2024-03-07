import logo from '../../../assets/images/logo/logoEN.svg';
import Navigation from './Navigation';
import Profile from './Profile';

export default function Header() {
	return (
		<header className=" h-18 flex flex-row items-center justify-between bg-white ">
			<div className="flex flex-row items-center justify-start">
				<img alt="logo" src={logo} className="flex h-16 w-32" />
				<Navigation />
			</div>
			<div className="flex flex-row items-center justify-start">
				<Profile />
			</div>
		</header>
	);
}
