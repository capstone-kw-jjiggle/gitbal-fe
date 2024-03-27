import { useState, useEffect } from 'react';
import MyDropdownSelect from '../../../components/MyDropdownSelect';
import { options } from './_data/mock';

export default function RegionSettingPage() {
	const [region, setRegion] = useState('');

	useEffect(() => {
		console.log(region);
	}, [region]);

	const isRegionFormValid = () => {
		return region.trim();
	};

	function handleSelectValueRegion(event) {
		setRegion(event.label); //event.value로 받아와도 됨
	}

	return (
		<div className="mx-auto my-auto flex w-5/12 flex-col items-center text-black19">
			<p className="text-3xl">
				지금 <span className="font-bold">소속 지역</span>을 설정하세요.
			</p>
			<form className="mx-auto flex w-11/12 flex-col items-center">
				<MyDropdownSelect placeholder={'클릭하세요'} onSelectChange={handleSelectValueRegion} optionsData={options} />

				<button
					className={`mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
						isRegionFormValid() ? '' : 'pointer-events-none opacity-50' // 모든 필드가 채워졌을 때 버튼 활성화
					}`}>
					다음
				</button>
			</form>
		</div>
	);
}
