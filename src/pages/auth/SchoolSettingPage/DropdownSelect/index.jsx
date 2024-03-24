import { useState } from 'react';
import Select from 'react-select';

export default function DropdownSelect({ placeholder, onSelectChange }) {
	const [value, setValue] = useState('');

	const handleSelectOption = (selectedOption) => {
		onSelectChange(selectedOption);
	};

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
		menu: (baseStyles, state) => ({
			...baseStyles,
			backgroundColor: 'white',
		}),
		option: (baseStyles, state) => ({
			...baseStyles,
			'backgroundColor': state.isSelected ? '#1368E8' : 'white',
			'border': '0.01rem solid #bdbdbd',
			'height': '100%',
			// 선택된 옵션은 파란색, 나머지는 흰색 배경
			// 기타 원하는 스타일 속성 추가 가능
			':hover': {
				backgroundColor: '#E7EFFC',
				color: 'black',
			},
		}),
	};

	const options = [
		{ label: '선택없음', value: '선택없음' },
		{ label: '광운대학교', value: '광운대학교' },
		{ label: '서울대학교', value: '서울대학교' },
	];

	return (
		<div className=" mt-8 w-full">
			<Select
				onChange={handleSelectOption}
				styles={customStyles}
				options={options}
				defaultValue={value}
				placeholder={placeholder}
				noOptionsMessage={() => '찾으시는 대학교가 없습니다.'}
			/>
		</div>
	);
}
