import NavGroup from './NavGroup';
import navItems from '../../../../nav-items';

export default function Navigation() {
	return (
		<nav >
			<NavGroup items={navItems.items} />
		</nav>
	);
}
