import { useNavigate, useParams } from 'react-router-dom';

import { useGetRegionNames, useUserJoin } from '@/api/auth/query';
import { useForm } from 'react-hook-form';
import 객체배열로변환하는함수 from '@/utils/convertArrayToObjectArray';
import DropdownSelect from '@/components/DropdownSelect/DropdownSelect';
import { routes } from '@/constants/routes';

export default function RegionSettingPage() {
	const navigate = useNavigate();
	const { data: regionNamesData } = useGetRegionNames();
	const { mutate: userJoin } = useUserJoin();

	const { control, watch } = useForm();
	const { selectedOption } = watch();
	const region = selectedOption ? selectedOption.value : '';

	const { univName } = useParams() || {};

	let 지역이름배열 = [];

	if (regionNamesData) {
		지역이름배열 = 객체배열로변환하는함수(regionNamesData.data);
	}

	const 회원가입정보객체 = {
		univName: univName,
		region: region,
	};

	const handle회원가입 = (회원가입정보) => {
		userJoin(회원가입정보, {
			onSuccess: (data) => {
				console.log(data);
				alert('성공');
				navigate(routes.auth.loginCompletePage);
			},
			onError: (e) => {
				console.error(e);
				alert('실패');
			},
		});
	};

	return (
		<div className="mx-auto my-auto flex w-5/12 flex-col items-center text-black19">
			<p className="text-3xl">
				지금 <span className="font-bold">소속 지역</span>을 설정하세요.
			</p>
			<form className="mx-auto flex w-11/12 flex-col items-center">
				<DropdownSelect optionsData={지역이름배열} control={control} />
				<p className=" mt-5 w-full text-sm text-black19">
					본인이 거주 및 출생한 지역을 자유롭게 선택할 수 있습니다.
					<br /> 지역정보는 서비스내 지역경쟁 콘텐츠에 사용됩니다.
				</p>
				<button
					className={`mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
						region ? '' : 'pointer-events-none opacity-50' // 모든 필드가 채워졌을 때 버튼 활성화
					}`}
					type="button"
					onClick={() => {
						handle회원가입(회원가입정보객체);
					}}>
					다음
				</button>
			</form>
		</div>
	);
}
