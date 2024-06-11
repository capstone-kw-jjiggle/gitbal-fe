import { useState } from 'react';

export const useFunnel = (defaultMenu) => {
	const [menu, setMenu] = useState(defaultMenu);

	const Menu = ({ name, children }) => {
		return <>{children}</>;
	};

	const Funnel = ({ children }) => {
		const targetMenu = children.find((childStep) => childStep.props.name === menu);
		return <>{targetMenu}</>;
	};

	return { Funnel, Menu, setMenu, currentMenu: menu };
};
