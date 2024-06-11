import logo from '@/assets/images/logo/justLogo.svg';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const GITHUB_AUTH_URL = '/oauth2/authorization/github';

export default function LoginPage() {
	const handle버튼클릭 = () => {
		window.location.href = BASE_URL + GITHUB_AUTH_URL;
	};

	return (
		<div className="my-auto flex h-max w-full flex-row ">
			<div className="flex h-full w-3/4 flex-col">
				<p className="text-7xl font-bold">경쟁하는</p>
				<p className="mt-2 text-7xl font-bold">
					<span className=" text-primary">코딩 습관</span>을 기르다
				</p>
				<p className="mt-2 text-7xl font-bold ">깃발</p>
				<p className="mt-6 text-xl  text-greyBD">나의 코딩실력은? 우리학교 순위는? 우리 지역은?</p>
				<p className="mt-4 text-lg text-primary">깃허브 계정을 연결하세요</p>
				<button
					className=" mt-4 flex h-10 w-36 place-content-center place-items-center rounded bg-primary text-sm font-semibold text-white hover:bg-blue-400"
					onClick={handle버튼클릭}>
					Git 소셜로그인
				</button>
			</div>
			<div className=" my-auto flex w-1/4 ">
				<img className="mx-auto " src={logo} alt="logo" />
			</div>
		</div>
	);
}
