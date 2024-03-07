import { Link } from 'react-router-dom';

export default function NavItem({ title, url }) {
	return (
		<li>
			<Link to={url}>{title}</Link>
		</li>
	);
}
