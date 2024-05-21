import { useNavigate } from 'react-router-dom';
import logo from '@/assets/images/logo/justLogo.svg';

export default function LoginCompletePage() {
	const navigate = useNavigate();
	return (
		<div className="my-auto flex h-max w-full flex-row ">
			<div className=" my-auto flex w-1/4 ">
				<img className="mx-auto " src={logo} alt="logo" />
			</div>
			<div className="flex h-full w-3/4 flex-col items-end">
				<p className="text-7xl font-bold">깃발</p>
				<p className="mt-2 text-7xl font-bold">가입을</p>
				<p className="mt-2 text-7xl font-bold ">
					<span className=" text-primary">축하드립니다.</span>
				</p>
				<p className="mt-6 text-xl  text-greyBD">지금부터 깃발의 서비스를 즐겨보세요.</p>

				<button
					className=" mt-12 flex h-10 w-36 place-content-center place-items-center rounded bg-primary text-sm font-semibold text-white hover:bg-blue-400"
					onClick={() => navigate('/auth/school')}>
					Git 소셜로그인
				</button>
			</div>
		</div>
	);
}
