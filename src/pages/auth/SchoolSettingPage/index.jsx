import { useState, useEffect } from 'react';
import Input from './Input';
import DropdownSelect from './DropdownSelect';

export default function SchoolSettingPage() {
	const [school, setSchool] = useState('');
	const [email, setEmail] = useState('');
	const [key, setKey] = useState('');
	const [agree, setAgree] = useState(false); // 체크박스 상태 추가

	useEffect(() => {
		console.log(school);
	}, [school]);

	useEffect(() => {
		console.log(email);
	}, [email]);

	useEffect(() => {
		console.log(key);
	}, [key]);

	useEffect(() => {
		console.log(agree);
	}, [agree]);

	const isEmailFormValid = () => {
		// 이메일 관련 필드가 채워졌는지 확인하는 함수
		return school.trim() && email.trim() !== '' && agree;
	};

	const isAllFormValid = () => {
		// 모든 필드가 채워졌는지 확인하는 함수
		return school.trim() && email.trim() !== '' && key.trim() !== '' && agree;
	};

	function handleSelectValueSchool(event) {
		setSchool(event.label); //event.value로 받아와도 됨
	}

	function handleInputValueEmail(event) {
		setEmail(event.target.value);
	}

	function handleInputValueKey(event) {
		setKey(event.target.value.slice(0, 4)); //4자리 제한 일단은...
	}

	function handleInputValueAgree(event) {
		setAgree(event.target.checked);
	}

	return (
		<div className="mx-auto my-auto flex w-5/12 flex-col items-center text-black19">
			<p className="text-3xl">
				지금 <span className="font-bold">소속 대학교</span>를 인증하세요
			</p>
			<form className="mx-auto flex w-11/12 flex-col items-center">
				<DropdownSelect placeholder={'클릭하세요'} onSelectChange={handleSelectValueSchool} />
				<Input placeholder={'대학 이메일'} type={'email'} value={email} onChange={handleInputValueEmail} />
				<div className="flex-start mt-5 flex">
					<input
						type="checkbox"
						className="mb-5 mr-2 flex h-5  w-5"
						checked={agree}
						onChange={handleInputValueAgree} // 체크 상태 변경 시 setAgree 호출
					/>
					<p className="flex text-sm">*서비스 제공을 목적으로 개인정보 수집 및 이용(필수)에 동의합니다.</p>
				</div>
				<button
					className={`mb-2 mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
						isEmailFormValid() ? '' : 'pointer-events-none opacity-50' // 모든 필드가 채워졌을 때 버튼 활성화
					}`}>
					<p className="">인증번호 전송</p>
				</button>
				<Input
					placeholder={'인증번호 입력'}
					type={'number'}
					value={key}
					maxLength={4}
					onChange={handleInputValueKey} // 값 변경 시 setKey 호출
				/>
				<button
					className={`mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
						isAllFormValid() ? '' : 'pointer-events-none opacity-50' // 모든 필드가 채워졌을 때 버튼 활성화
					}`}>
					다음
				</button>
			</form>
		</div>
	);
}
