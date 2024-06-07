import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { routes } from '@/constants/routes';
import SchoolSettingInput from '@/pages/auth/SchoolSettingPage/components/SchoolSettingInput';
import DropdownSelect from '@/components/DropdownSelect/DropdownSelect';
import 객체배열로변환하는함수 from '@/utils/convertArrayToObjectArray';
import { useGetSchoolNames, useRequestAuthNumber, useValidateAuthNumber } from '@/api/auth/query';

const 플레이스홀더 = {
	이메일: '대학 이메일 입력',
	인증번호: '인증번호 입력',
};

export default function SchoolSettingPage() {
	const { data: schoolNamesData } = useGetSchoolNames();
	const { mutate: 인증번호전송함수 } = useRequestAuthNumber();
	const { mutate: 인증번호검증함수 } = useValidateAuthNumber();
	const navigate = useNavigate();

	let 학교이름배열 = [];
	if (schoolNamesData) {
		학교이름배열 = 객체배열로변환하는함수(schoolNamesData.data);
	}

	const { register, watch, control } = useForm();

	const { email, authNumber, agree, selectedOption } = watch();
	let univName = selectedOption ? selectedOption.value : '';
	const 메일인증정보 = { univName: univName, email: email };
	const 메일검증정보 = { ...메일인증정보, code: authNumber };

	const handle인증번호전송 = (인증정보) => {
		인증번호전송함수(인증정보);
	};

	const handle인증번호검증 = (인증번호) => {
		인증번호검증함수(인증번호, {
			onSuccess: (data) => {
				console.log(data);
				alert('성공');
				navigate(routes.auth.regionSetting.replace(':univName', univName));
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
				지금 <span className="font-bold">소속 대학교</span>를 인증하세요
			</p>
			<form className="mx-auto flex w-11/12 flex-col items-center">
				<DropdownSelect placeholder={'클릭하세요'} optionsData={학교이름배열} control={control} />
				{univName !== '선택없음' && (
					<>
						<SchoolSettingInput
							placeholder={플레이스홀더.이메일}
							type={'email'}
							register={{ ...register('email', { required: true }) }}
						/>
						<div className="flex-start mt-5 flex">
							<input type="checkbox" className="mb-5 mr-2 flex h-5  w-5" {...register('agree', { required: true })} />
							<p className=" flex-row text-sm">
								*서비스 제공을 목적으로{' '}
								<button className=" underline underline-offset-4" onClick={() => navigate(routes.privacy)}>
									개인정보 수집 및 이용(필수)
								</button>
								에 동의합니다.
							</p>
						</div>
						<button
							className={`mb-2 mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
								!!univName && !!email && agree ? '' : 'pointer-events-none opacity-50' // 모든 필드가 채워졌을 때 버튼 활성화
							}`}
							type="button"
							onClick={() => handle인증번호전송(메일인증정보)}>
							인증번호 전송
						</button>
						<SchoolSettingInput
							placeholder={플레이스홀더.인증번호}
							type={'number'}
							register={{ ...register('authNumber', { required: true }) }}
						/>
					</>
				)}
				<button
					className={`mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
						univName === '선택없음' || (!!email && !!authNumber && agree) ? '' : 'pointer-events-none opacity-50' // 모든 필드가 채워졌을 때 버튼 활성화
					}`}
					type="button"
					onClick={() => handle인증번호검증(메일검증정보)}>
					다음
				</button>
			</form>
		</div>
	);
}
