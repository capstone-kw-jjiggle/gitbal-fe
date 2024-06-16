import { useNavigate, useLocation } from 'react-router-dom';

export default function NotLogin() {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div className="mt-10 flex w-full">
			<div className="m-auto text-black19">
				<div className="flex flex-col place-items-center ">
					{location.pathname === '/school-page' ? (
						<p className=" text-3xl font-extrabold ">우리 학교 점수가 궁금한가요?</p>
					) : location.pathname === '/region-page' ? (
						<p className=" text-3xl font-extrabold ">우리 지역 점수가 궁금한가요?</p>
					) : (
						<p className=" text-3xl font-extrabold ">나의 코딩 실력이 궁금하신가요?</p>
					)}
					<p className="mt-4 text-sm  text-primary">지금 깃허브로 로그인하고 알아보기</p>
					<button
						className="mt-4 flex h-10 w-36 place-content-center place-items-center rounded bg-primary text-sm font-semibold text-white hover:bg-blue-400 focus:bg-blue-700"
						onClick={() => navigate('/auth/login')}>
						지금 로그인하기
					</button>
				</div>
			</div>
		</div>
	);
}
