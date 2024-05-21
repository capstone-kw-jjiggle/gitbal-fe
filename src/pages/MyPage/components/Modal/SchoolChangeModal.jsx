import MyDropdownSelect from '@/components/MyDropdownSelect';
import SchoolChangeInput from '@/pages/MyPage/components/Modal/SchoolChangeInput';
import { options } from '@/pages/auth/SchoolSettingPage/_data/mock';
import { useState } from 'react';

const SchoolChangeModal = ({ setModalOpen }) => {
	const mySchool = '광운대학교';

	const [school, setSchool] = useState('');
	const [email, setEmail] = useState('');
	const [key, setKey] = useState('');

	const handleModalClose = () => {
		setModalOpen(false);
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

	const isEmailFormValid = () => {
		// 이메일 관련 필드가 채워졌는지 확인하는 함수
		return school.trim() && email.trim();
	};

	const isAllFormValid = () => {
		return school.trim() && email.trim() && key.trim();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-black19 backdrop-blur-sm">
			<div className="w-2/5 ">
				<div className=" flex flex-col justify-center rounded bg-white p-12">
					<button className=" float-right place-self-end" onClick={handleModalClose}>
						X
					</button>
					<h1 className=" mx-auto text-lg font-bold">현재 소속학교 == {mySchool}</h1>
					<div className=" mx-auto flex w-2/3 flex-col">
						<MyDropdownSelect
							placeholder={'클릭하세요'}
							onSelectChange={handleSelectValueSchool}
							optionsData={options}
						/>
						<SchoolChangeInput
							placeholder={'대학 이메일 입력'}
							type={'email'}
							value={email}
							onChange={handleInputValueEmail}
						/>
						<button
							className={`mx-auto mb-2 mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
								isEmailFormValid() ? '' : 'pointer-events-none opacity-50' // 이멜일 관련 필드가 채워졌을 때 버튼 활성화
							}`}>
							<p className="">인증번호 전송</p>
						</button>
						<SchoolChangeInput
							placeholder={'인증번호 입력'}
							type={'number'}
							value={key}
							maxLength={4}
							onChange={handleInputValueKey}
						/>
						<button
							className={`mx-auto mb-2 mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
								isAllFormValid() ? '' : 'pointer-events-none opacity-50' // 모든 필드가 채워졌을 때 버튼 활성화
							}`}>
							<p className="">변경</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SchoolChangeModal;