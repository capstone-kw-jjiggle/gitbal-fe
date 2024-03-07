import NavGroup from './NavGroup';
import navItems from '../../../../nav-items';

export default function Navigation() {
	return (
		<nav className="flex flex-row">
			<NavGroup items={navItems.items} />
		</nav>
	);
}
