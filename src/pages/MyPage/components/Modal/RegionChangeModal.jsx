import MyDropdownSelect from '@/components/MyDropdownSelect';
import { options } from '@/pages/auth/RegionSettingPage/_data/mock';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const RegionChangeModal = ({ setModalOpen }) => {
	const myRegion = '서울특별시';

	const [region, setRegion] = useState('');

	const { control } = useForm();

	function handleSelectValueRegion(event) {
		setRegion(event.label); //event.value로 받아와도 됨
	}

	const isRegionFormValid = () => {
		return region.trim();
	};
	// 모달 외부 클릭 감지를 위한 ref
	const modalRef = useRef(null);

	const handleModalClose = () => {
		setModalOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				handleModalClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	return (
		<div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-black19 backdrop-blur-sm">
			<div ref={modalRef} className="w-2/5">
				<div className="flex flex-col justify-center rounded bg-white p-12 shadow-2xl">
					<h1 className="mx-auto text-lg font-bold">현재 소속학교 == {myRegion}</h1>
					<div className="mx-auto flex w-2/3 flex-col">
						<MyDropdownSelect optionsData={options} control={control} />
						<button
							className={`mx-auto mb-2 mt-6 h-11 w-36 rounded bg-primary text-sm font-bold text-white ${
								isRegionFormValid() ? '' : 'pointer-events-none opacity-50'
							}`}
							onClick={handleModalClose}>
							<p className="">변경</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegionChangeModal;
