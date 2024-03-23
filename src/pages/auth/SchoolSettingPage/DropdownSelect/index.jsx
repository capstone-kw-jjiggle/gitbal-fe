import { useState } from 'react';
import Select from 'react-select';

export default function DropdownSelect() {
	const [value, setValue] = useState('');
	console.log(value);

	const customStyles = {
		control: (baseStyles, state) => ({
			...baseStyles,
			'height': '2.5rem', //w-10
			'fontSize': '0.875rem', //font-sm
			'padding': 2, //p-2
			'borderColor': '#696969',
			'&:hover': { borderColor: '#696969' },
			'&:focus': { borderColor: '#1368E8' },
		}),
		placeholder: (defaultStyles) => {
			return {
				...defaultStyles,
				color: '#A4ABB5',
			};
		},
		menu: (provided, state) => ({
			...provided,
			backgroundColor: 'white', // 드롭다운 메뉴의 배경색을 노란색으로 변경
			// '&:hover': { backgroundColor: '#696969' },
			// 기타 원하는 스타일 속성 추가 가능
		}),
		option: (provided, state) => ({
			...provided,
			'backgroundColor': state.isSelected ? '#1368E8' : 'white',
			'border': '0.01rem solid #bdbdbd',
			'height': '100%',
			// 선택된 옵션은 파란색, 나머지는 흰색 배경
			// 기타 원하는 스타일 속성 추가 가능
			':hover': {
				backgroundColor: '#90B3F4', // 호버된 옵션은 빨간색으로 변경
			},
		}),
	};

	const options = [
		{ label: '선택없음', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
		{ label: '선택없음', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
		{ label: '선택없음', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
		{ label: '선택없음', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
		{ label: '선택없음', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
		{ label: '선택없음', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
		{ label: '선택없음', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
		{ label: '선택없음', value: 'noSelect' },
		{ label: '광운대학교', value: 'kw' },
		{ label: '서울대학교', value: 'snu' },
	];

	return (
		<div className=" w-full">
			<Select
				styles={customStyles}
				options={options}
				defaultValue={value}
				placeholder="클릭하세요"
				noOptionsMessage={() => '찾으시는 대학교가 없습니다.'}
			/>
		</div>
	);
}
