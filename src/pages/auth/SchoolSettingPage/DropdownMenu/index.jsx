import React, { useState } from 'react';
import CancelIcon from '../../../../assets/images/Icon/Cancel_icon.svg';

export default function DropdownMenu() {
	const [value, setValue] = useState(); // 선택된 옵션 value에 저장
	const [inputValue, setInputValue] = useState(''); // 입력된 값 상태 관리
	const [menuOpen, setMenuOpen] = useState(false); // 드롭다운 메뉴의 상태

	const options = [
		{ label: '선택안함', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
		{ label: '고려대학교', value: 'korea' },
		{ label: '건국대학교', value: 'konkuk' },
		{ label: '연세대학교', value: 'yonsei' },
	];

	function handleSelect(option) {
		setValue(option.value);
		setInputValue(option.label);
		setMenuOpen(false);
	}

	function handleInputChange(event) {
		const inputValue = event.target.value;
		setInputValue(inputValue);
		setMenuOpen(true); // 입력 시 메뉴 열기
	}

	// 입력된 값에 따라 옵션을 필터링
	const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));

	// 입력 값을 지우는 함수
	const clearInputValue = () => {
		setInputValue('');
	};

	return (
		<div className=" font-na relative my-4 h-10 w-full text-sm text-black19">
			{/* 입력창 */}
			<div className="relative">
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					onClick={() => setMenuOpen(true)} // 입력창 클릭 시 메뉴 열기
					className="h-10 w-full rounded border border-grey69 p-3"
					placeholder="클릭하세요"
				/>
				{/* 입력 값을 지우는 버튼 */}
				{inputValue && (
					<button
						onClick={clearInputValue}
						className="absolute right-1 ml-3 mt-2 opacity-50 hover:opacity-40 focus:opacity-20">
						<img src={CancelIcon} className="my-auto" />
					</button>
				)}
			</div>
			{/* 드롭다운 메뉴 */}
			{menuOpen && (
				<div className="absolute z-10 w-full rounded-md border border-gray-300 bg-white shadow-lg">
					{filteredOptions.map((option) => (
						<div
							key={option.value}
							onClick={() => handleSelect(option)}
							className="cursor-pointer px-4 py-2 hover:bg-gray-100">
							{option.label}
						</div>
					))}
				</div>
			)}
			{/* 선택된 옵션에 따른 안내 메시지 */}
			<div className="mb-1 mt-1 text-center">
				<p className="">@{value}.ac.kr 로 끝나는 이메일을 입력해주세요</p>
			</div>
		</div>
	);
}
