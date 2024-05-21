import SchoolChangeModal from '@/pages/MyPage/components/Modal/SchoolChangeModal';
import SettingButton from './SettingButton';
import SettingItem from './SettingItem';

import { useState, useRef, useEffect } from 'react';

export default function SettingInfo() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			{/* 모달구역 */}
			{isModalOpen && <SchoolChangeModal setModalOpen={setIsModalOpen} />}

			<div className="mb-8 mt-8 flex w-full flex-col items-center justify-between rounded-2xl border border-gray-200 p-6 text-black19 shadow-lg">
				<section className="w-full">
					<h1 className="mb-6 w-full text-xl font-extrabold">학교/지역</h1>
					<SettingItem
						title={'소속학교 == 광운대'}
						content={'변경버튼을 눌러 재인증을 통해 소속학교를 변경할 수 있습니다.'}
						SettingButton={<SettingButton title={'변경'} onClick={showModal} />}
					/>
					<hr className="bg-red border-1 my-3 border-greyBD" />
					<SettingItem
						title={'소속지역 == 경기도'}
						content={'변경버튼을 눌러 재인증을 통해 소속지역을 변경할 수 있습니다.'}
						SettingButton={<SettingButton title={'변경'} />}
					/>
					<hr className="bg-red border-1 my-3 border-greyBD" />
				</section>
				<section className="mt-8 w-full">
					<h1 className="mb-6 w-full text-xl font-extrabold">계정 정보</h1>
					<SettingItem
						title={'프로필 사진 변경'}
						content={'변경버튼을 눌러 재인증을 통해 소속학교를 변경할 수 있습니다.'}
						SettingButton={<SettingButton title={'변경'} />}
					/>
					<hr className="bg-red border-1 my-3 border-greyBD" />
					<SettingItem
						title={'서비스 로그아웃'}
						content={'변경버튼을 눌러 재인증을 통해 소속학교를 변경할 수 있습니다.'}
						SettingButton={<SettingButton title={'로그아웃'} color={'bg-secondary'} />}
					/>

					<hr className="bg-red border-1 my-3 border-greyBD" />
					<SettingItem
						title={'서비스 탈퇴'}
						content={'변경버튼을 눌러 재인증을 통해 소속학교를 변경할 수 있습니다.'}
						SettingButton={<SettingButton title={'탈퇴'} color={'bg-[#FF0000]'} />}
					/>
				</section>
			</div>
		</>
	);
}
