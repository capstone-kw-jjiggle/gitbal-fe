import { useState } from 'react';

export default function Dropdown() {
	const [value, setValue] = useState(); //선택된 옵션 value에 저장

	const options = [
		{ label: '선택안함', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
		{ label: '고려대학교', value: 'korea' },
	];
	function handleSelect(event) {
		setValue(event.target.value);
	}

	return (
		<div className=" font-na my-4 h-10 w-full text-sm text-black19">
			<div className=" ">
				<select onChange={handleSelect} className="h-10 w-full rounded border border-grey69 p-2">
					{options.map((option) => (
						<option value={option.value}>{option.label}</option>
					))}
				</select>
				<div className="text-center">
					<p className="mt-1">@{value}.ac.kr 로 끝나는 이메일을 입력해주세요</p>
				</div>
			</div>
		</div>
	);
}
