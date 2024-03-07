import logo from '../../../assets/images/logo/logoEN.svg';

export default function Header() {
	return (
		<header className=" h-18 flex flex-row items-center justify-start bg-white ">
			<img alt="logo" src={logo} className="flex h-16 w-32" />
		</header>
	);
}
