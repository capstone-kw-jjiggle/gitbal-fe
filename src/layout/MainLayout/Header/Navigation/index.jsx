import NavGroup from '@/layout/MainLayout/Header/Navigation/NavGroup';
import navItems from '@/nav-items';

export default function Navigation() {
	return (
		<nav>
			<NavGroup items={navItems.items} />
		</nav>
	);
}
