import NavItem from './NavItem';

export default function NavGroup({ items }) {
	return (
		<ol className="ml-8 flex flex-row space-x-8 text-sm">
			{items.children.map((item) => (
				<NavItem key={item.id} url={item.url} title={item.title} />
			))}
		</ol>
	);
}
