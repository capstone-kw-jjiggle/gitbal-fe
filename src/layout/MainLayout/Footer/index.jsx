import { useNavigate } from 'react-router-dom';
import { routes } from '@/constants/routes';

export default function Footer() {
	const navigate = useNavigate();
	return (
		<>
			<footer className=" my-auto flex h-28 w-full flex-col justify-center text-sm text-grey69">
				<div className=" w-full">
					<button className="flex" onClick={() => navigate(routes.privacy)}>
						개인정보처리방침
					</button>
					<button className="flex" onClick={() => navigate(routes.tos)}>
						서비스 이용약관
					</button>
					<p className="flex">Contact | gitbal2019@gmail.com</p>
				</div>
			</footer>
		</>
	);
}
