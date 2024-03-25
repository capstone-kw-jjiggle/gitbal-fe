import { Outlet } from 'react-router-dom';

import Footer from '@/layout/MainLayout/Footer';
import Header from '@/layout/MainLayout/Header';

export default function MainLayout() {
	return (
		<div className=" flex min-h-screen w-screen flex-col">
			<div className="sticky top-0 flex w-screen shadow-lg">
				<div className="mx-auto w-4/6 ">
					<Header />
				</div>
			</div>
			<Outlet />
			<div className=" relative  mt-16 w-screen bg-greyD9">
				<div className=" container mx-auto w-4/6">
					<Footer />
				</div>
			</div>
		</div>
	);
}
