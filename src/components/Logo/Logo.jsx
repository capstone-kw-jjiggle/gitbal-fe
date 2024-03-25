import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo/logoEN.svg';

export default function Logo() {
	return (
		<Link to="/main-page" className="flex h-16 w-28">
			<img alt="logo" src={logo} />
		</Link>
	);
}
