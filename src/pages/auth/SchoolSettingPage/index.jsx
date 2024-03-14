import { useState } from 'react';
import Input from './Input';
import DropdownMenu from './DropdownMenu';

export default function SchoolSettingPage() {
	const [email, setEmail] = useState('');
	const [key, setKey] = useState('');
	const [agree, setAgree] = useState(false); // 체크박스 상태 추가

	// 모든 필드가 채워졌는지 확인하는 함수
	const isFormValid = () => {
		return email.trim() !== '' && key.trim() !== '' && agree;
	};

	function handleInputValueEmail(event) {
		setEmail(event.target.value);
		console.log(email);
	}

	function handleInputValueKey(event) {
		setKey(event.target.value);
		console.log(key);
	}

	function handleInputValueAgree(event) {
		setAgree(event.target.value);
		console.log(agree);
	}

	return (
		<div className="mx-auto my-auto flex w-5/12 flex-col items-center text-black19">
			<p className="text-3xl">
				지금 <span className="font-bold">소속 대학교</span>를 인증하세요
			</p>
			<form className="mx-auto flex w-10/12 flex-col items-center">
				<DropdownMenu />
				<Input
					placeholder={'대학 이메일'}
					type={'email'}
					value={email}
					onChange={handleInputValueEmail} // 값 변경 시 setEmail 호출이 안됨...ㅜㅜ
				/>
				<div className="flex-start mt-2 flex">
					<input
						type="checkbox"
						className="mb-5 mr-2 flex"
						checked={agree}
						onChange={handleInputValueAgree} // 체크 상태 변경 시 setAgree 호출
					/>
					<p className="flex text-sm">*서비스 제공을 목적으로 개인정보 수집 및 이용(필수)에 동의합니다.</p>
				</div>
				<button className="mb-2 mt-2 h-11 w-36 rounded bg-primary text-sm font-bold text-white">
					<p className="">인증번호 전송</p>
				</button>
				<Input
					className=" i"
					placeholder={'인증번호 입력'}
					type={'number'}
					value={key}
					onChange={handleInputValueKey} // 값 변경 시 setKey 호출
				/>

				<button
					className={`mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
						isFormValid() ? '' : 'pointer-events-none opacity-50' // 모든 필드가 채워졌을 때 버튼 활성화
					}`}>
					다음
				</button>
			</form>
		</div>
	);
}
