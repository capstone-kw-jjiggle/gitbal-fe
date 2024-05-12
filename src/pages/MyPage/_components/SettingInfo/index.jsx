export default function SettingInfo() {
	return (
		<div className="mb-8 mt-8 flex w-full flex-col items-center justify-between rounded-2xl border border-gray-200 p-6 text-black19 shadow-lg">
			<section className="w-full">
				<h1 className="mb-6 w-full text-xl font-extrabold">학교/지역</h1>
				<div className="flex items-center justify-between">
					<div>
						<h2 className="mb-1 text-lg font-bold">소속학교 == 광운대</h2>
						<p className="text-sm text-grey69">변경버튼을 눌러 재인증을 통해 소속학교를 변경할 수 있습니다.</p>
					</div>
					<button className="h-14 w-24 rounded-lg bg-primary text-lg font-bold text-white">변경</button>
				</div>
				<hr className="bg-red border-1 my-3 border-greyBD" />
				<div className="flex items-center justify-between">
					<div>
						<h2 className="mb-1 text-lg font-bold">소속지역 == 경기도</h2>
						<p className="text-sm text-grey69">변경버튼을 눌러 재인증을 통해 소속지역을 변경할 수 있습니다.</p>
					</div>
					<button className="h-14 w-24 rounded-lg bg-primary text-lg font-bold text-white">변경</button>
				</div>
				<hr className="bg-red border-1 my-3 border-greyBD" />
			</section>
			<section className="mt-8 w-full">
				<h1 className="mb-6 w-full text-xl font-extrabold">계정 정보</h1>
				<div className="flex items-center justify-between">
					<div>
						<h2 className="mb-1 text-lg font-bold">프로필 사진 변경</h2>
						<p className="text-sm text-grey69">변경버튼을 눌러 재인증을 통해 소속학교를 변경할 수 있습니다.</p>
					</div>
					<button className="h-14 w-24 rounded-lg bg-primary text-lg font-bold text-white">변경</button>
				</div>
				<hr className="bg-red border-1 my-3 border-greyBD" />
				<div className="flex items-center justify-between">
					<div>
						<h2 className="mb-1 text-lg font-bold">서비스 로그아웃</h2>
						<p className="text-sm text-grey69">변경버튼을 눌러 재인증을 통해 소속지역을 변경할 수 있습니다.</p>
					</div>
					<button className="h-14 w-24 rounded-lg bg-secondary text-lg font-bold text-white">로그아웃</button>
				</div>
				<hr className="bg-red border-1 my-3 border-greyBD" />
				<div className="flex items-center justify-between">
					<div>
						<h2 className="mb-1 text-lg font-bold">서비스 탈퇴</h2>
						<p className="text-sm text-grey69">변경버튼을 눌러 재인증을 통해 소속지역을 변경할 수 있습니다.</p>
					</div>
					<button className="h-14 w-24 rounded-lg bg-[#FF0000] text-lg font-bold text-white">탈퇴</button>
				</div>
			</section>
		</div>
	);
}
