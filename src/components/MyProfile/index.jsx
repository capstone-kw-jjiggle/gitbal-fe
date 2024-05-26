import { LargeProfileImage } from '@components/ProfileImage';
import levelImage from '@/assets/images/userLevel/userLevel3.svg';
import { useNavigate } from 'react-router-dom';

export default function MyProfile() {
	const isLogined = false;

	const navigate = useNavigate();

	return (
		<div className="mt-3 flex w-full">
			{isLogined ? (
				<>
					<LargeProfileImage />{' '}
					<div className="ml-8 flex flex-col justify-center gap-1 text-xl font-extrabold">
						<p className="font-bold text-primary">&quot;부지런히&quot; + &quot;열일하는&quot;</p>
						<div className="mt-1 flex">
							<p className="text-2xl font-extrabold">Suwonthugger</p>
							<img src={levelImage} className="ml-2 h-9 w-9" />
						</div>
						<p>광운대학교</p>
						<p>경기도</p>
					</div>
				</>
			) : (
				<div className=" mx-auto text-black19">
					<div className="flex flex-col place-items-center ">
						<p className=" text-3xl font-extrabold ">우리 학교 점수가 궁금한가요?</p>
						<p className="mt-4 text-sm  text-primary">지금 깃허브로 로그인하고 알아보기</p>
						<button
							className="mt-4 flex h-10 w-36 place-content-center place-items-center rounded bg-primary text-sm font-semibold text-white hover:bg-blue-400"
							onClick={() => navigate('/auth/login')}>
							지금 로그인하기
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
