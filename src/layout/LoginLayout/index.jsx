import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function LoginLayout() {
	return (
		<div className=" flex min-h-screen w-screen flex-col">
			<div className="sticky top-0 flex w-screen shadow-lg">
				<div className="mx-auto w-4/6 ">
					<Header />
				</div>
			</div>
			<div className="mx-auto flex  w-4/6 flex-grow flex-col">
				<div className="flex  flex-grow flex-col">
					<Outlet />
				</div>
			</div>
			<div className=" relative  mt-16 w-screen bg-greyD9">
				<div className=" container mx-auto w-4/6">
					<Footer />
				</div>
			</div>
		</div>
	);
}
