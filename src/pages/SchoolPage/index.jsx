import Divider from '../../components/Divider';
import MainContainer from '../../components/MainContainer';
import ProfileImage from '../../components/ProfileImage';
import levelImage from '../../assets/images/userLevel/userLevel3.svg';
import levelImage6 from '../../assets/images/userLevel/userLevel6.svg';
import Pagination from './Pagination';

export default function SchoolPage() {
	return (
		<>
			<MainContainer>
				<div className="mx-auto mt-8 flex w-11/12 items-start justify-between text-black19">
					<div className="flex w-1/2 flex-col">
						<div className="mb-5 flex items-baseline justify-start">
							<h2 className="text-3xl font-extrabold text-primary">학교 랭킹</h2>
							<p className="ml-2 text-lg font-semibold">시즌 100일 남음</p>
						</div>
						<div className="mt-3 flex">
							<ProfileImage />
							<div className="ml-8 flex flex-col justify-center gap-1 text-xl font-extrabold">
								<p className="font-bold text-primary">&quot;부지런히&quot; + &quot;열일하는&quot;</p>
								<div className="mt-1 flex">
									<p className="text-2xl font-extrabold">Suwonthugger</p>
									<img src={levelImage} className="ml-2 h-9 w-9" />
								</div>
								<p>광운대학교</p>
								<p>경기도</p>
							</div>
						</div>
					</div>
					<div className="ml-8 flex w-1/2 flex-col gap-2 rounded-xl border border-gray-200 px-12 py-16 shadow-lg">
						<div className="flex justify-between text-3xl">
							<div className="flex font-extrabold">
								<h2>나의 학교</h2>
								<p className="ml-10">3위</p>
							</div>
							<img src={levelImage} className="h-14 w-14" />
						</div>
						<div className="flex text-xl">
							<p className="font-semibold">광운대학교 </p>
							<p className="ml-16">321,312 점</p>
						</div>
						<div className="flex items-baseline justify-between text-xl">
							<div className="flex items-center ">
								<p className="font-semibold">최대 기여자</p>
								<p className="ml-16 font-light">jamoong</p>
							</div>
							<p className="text-sm text-green-600">321,312 점 기여</p>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-8 flex w-11/12 items-center justify-between rounded-2xl border border-gray-200 px-12 py-6 text-black19 shadow-lg">
					<p className="text-3xl font-extrabold">1위</p>
					<div className="flex w-1/2 ">
						<div className="mt-6 flex w-full flex-col">
							<div className="flex justify-between text-2xl">
								<p className="font-bold">서울대학교</p>
								<p>3,131,232점</p>
							</div>
							<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
							<div className="flex justify-end">
								<p>MVP</p>
								<p className="ml-4 text-primary">suwonthugger</p>
							</div>
						</div>
					</div>
					<div>
						<p>학교 점수 상승</p>
						<p className="text-green-500">+23,112점</p>
					</div>
					<div>
						<img src={levelImage6} className="ml-2 h-20 w-20" />
					</div>
				</div>
				<div className="mx-auto mb-10 mt-4 flex w-11/12 justify-end text-black19">
					<p>시즌4 보상 칭호 맛꿀마수호자 </p>
				</div>
			</MainContainer>
			<Divider />
			<MainContainer>
				<div className="mx-auto mt-8 flex w-11/12 items-center justify-between ">
					<Pagination />
					<div className="w-1/3">
						<input
							className="h-12 w-full rounded-lg border-2 border-greyD9 px-4 py-2 text-sm"
							type="text"
							placeholder="github ID"
						/>
					</div>
				</div>

				<div className="mx-auto mb-3 mt-8 flex w-11/12 items-center justify-between rounded-2xl border border-gray-200 px-12 py-3 text-black19 shadow-lg">
					<p className="text-2xl font-extrabold">1위</p>
					<div className="flex w-1/2 ">
						<div className="mt-3 flex w-full flex-col">
							<div className="flex justify-between text-xl">
								<p className="font-bold">서울대학교</p>
								<p>3,131,232점</p>
							</div>
							<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
							<div className="flex justify-end text-sm">
								<p>MVP</p>
								<p className="ml-4 text-primary">suwonthugger</p>
							</div>
						</div>
					</div>
					<div className="text-sm">
						<p>학교 점수 상승</p>
						<p className="text-green-500">+23,112점</p>
					</div>
					<div>
						<img src={levelImage6} className="ml-2 h-14 w-14" />
					</div>
				</div>
				<div className="mx-auto mb-3 flex w-11/12 items-center justify-between rounded-2xl border border-gray-200 px-12 py-3 text-black19 shadow-lg">
					<p className="text-2xl font-extrabold">1위</p>
					<div className="flex w-1/2 ">
						<div className="mt-3 flex w-full flex-col">
							<div className="flex justify-between text-xl">
								<p className="font-bold">서울대학교</p>
								<p>3,131,232점</p>
							</div>
							<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
							<div className="flex justify-end text-sm">
								<p>MVP</p>
								<p className="ml-4 text-primary">suwonthugger</p>
							</div>
						</div>
					</div>
					<div className="text-sm">
						<p>학교 점수 상승</p>
						<p className="text-green-500">+23,112점</p>
					</div>
					<div>
						<img src={levelImage6} className="ml-2 h-14 w-14" />
					</div>
				</div>
				<div className="mx-auto mb-3 flex w-11/12 items-center justify-between rounded-2xl border border-gray-200 px-12 py-3 text-black19 shadow-lg">
					<p className="text-2xl font-extrabold">1위</p>
					<div className="flex w-1/2 ">
						<div className="mt-3 flex w-full flex-col">
							<div className="flex justify-between text-xl">
								<p className="font-bold">서울대학교</p>
								<p>3,131,232점</p>
							</div>
							<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
							<div className="flex justify-end text-sm">
								<p>MVP</p>
								<p className="ml-4 text-primary">suwonthugger</p>
							</div>
						</div>
					</div>
					<div className="text-sm">
						<p>학교 점수 상승</p>
						<p className="text-green-500">+23,112점</p>
					</div>
					<div>
						<img src={levelImage6} className="ml-2 h-14 w-14" />
					</div>
				</div>
				<div className="mx-auto mb-3 flex w-11/12 items-center justify-between rounded-2xl border border-gray-200 px-12 py-3 text-black19 shadow-lg">
					<p className="text-2xl font-extrabold">1위</p>
					<div className="flex w-1/2 ">
						<div className="mt-3 flex w-full flex-col">
							<div className="flex justify-between text-xl">
								<p className="font-bold">서울대학교</p>
								<p>3,131,232점</p>
							</div>
							<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
							<div className="flex justify-end text-sm">
								<p>MVP</p>
								<p className="ml-4 text-primary">suwonthugger</p>
							</div>
						</div>
					</div>
					<div className="text-sm">
						<p>학교 점수 상승</p>
						<p className="text-green-500">+23,112점</p>
					</div>
					<div>
						<img src={levelImage6} className="ml-2 h-14 w-14" />
					</div>
				</div>
				<div className="mx-auto mb-3 flex w-11/12 items-center justify-between rounded-2xl border border-gray-200 px-12 py-3 text-black19 shadow-lg">
					<p className="text-2xl font-extrabold">1위</p>
					<div className="flex w-1/2 ">
						<div className="mt-3 flex w-full flex-col">
							<div className="flex justify-between text-xl">
								<p className="font-bold">서울대학교</p>
								<p>3,131,232점</p>
							</div>
							<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
							<div className="flex justify-end text-sm">
								<p>MVP</p>
								<p className="ml-4 text-primary">suwonthugger</p>
							</div>
						</div>
					</div>
					<div className="text-sm">
						<p>학교 점수 상승</p>
						<p className="text-green-500">+23,112점</p>
					</div>
					<div>
						<img src={levelImage6} className="ml-2 h-14 w-14" />
					</div>
				</div>
				<div className="mx-auto mb-3 flex w-11/12 items-center justify-between rounded-2xl border border-gray-200 px-12 py-3 text-black19 shadow-lg">
					<p className="text-2xl font-extrabold">1위</p>
					<div className="flex w-1/2 ">
						<div className="mt-3 flex w-full flex-col">
							<div className="flex justify-between text-xl">
								<p className="font-bold">서울대학교</p>
								<p>3,131,232점</p>
							</div>
							<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
							<div className="flex justify-end text-sm">
								<p>MVP</p>
								<p className="ml-4 text-primary">suwonthugger</p>
							</div>
						</div>
					</div>
					<div className="text-sm">
						<p>학교 점수 상승</p>
						<p className="text-green-500">+23,112점</p>
					</div>
					<div>
						<img src={levelImage6} className="ml-2 h-14 w-14" />
					</div>
				</div>
				<div className="mx-auto mb-3 flex w-11/12 items-center justify-between rounded-2xl border border-gray-200 px-12 py-3 text-black19 shadow-lg">
					<p className="text-2xl font-extrabold">1위</p>
					<div className="flex w-1/2 ">
						<div className="mt-3 flex w-full flex-col">
							<div className="flex justify-between text-xl">
								<p className="font-bold">서울대학교</p>
								<p>3,131,232점</p>
							</div>
							<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
							<div className="flex justify-end text-sm">
								<p>MVP</p>
								<p className="ml-4 text-primary">suwonthugger</p>
							</div>
						</div>
					</div>
					<div className="text-sm">
						<p>학교 점수 상승</p>
						<p className="text-green-500">+23,112점</p>
					</div>
					<div>
						<img src={levelImage6} className="ml-2 h-14 w-14" />
					</div>
				</div>
			</MainContainer>
		</>
	);
}
