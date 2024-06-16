import { useRef } from 'react';

import Divider from '@/components/Divider';
import logo from '@/assets/images/userLevel/userLevel3.svg';
import testImg1 from '@/assets/images/testImg/aboutTestImg1.jpg';
import testImg2 from '@/assets/images/testImg/aboutTestImg2.jpg';
import testImg3 from '@/assets/images/testImg/aboutTestImg3.jpg';
import testImg4 from '@/assets/images/testImg/aboutTestImg4.jpeg';
import AboutPeopleCard from '@/pages/AboutPage/components/AboutPeopleCard';

export default function AboutPage() {
	const moveHowToUseRef = useRef();
	const movePeopleRef = useRef();

	const handleScrollRef = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<>
			<div className="mx-auto w-3/5 text-black19">
				<div className="">
					<div className="mt-20 flex  flex-row justify-center">
						<div>
							<img src={logo} className="h-48 w-48" alt="logo" />
						</div>
						<div className="ml-24 flex flex-col text-7xl font-extrabold">
							<h1 className=" text-primary">
								<span className="text-black19">깃</span>허브에서
							</h1>
							<h1 className="ml-1 mt-8 text-primary">
								<span className="text-black19">발</span>로 뛰자
							</h1>
						</div>
					</div>
				</div>
				<div className="mx-auto mb-4 mt-40 flex flex-row  text-xl text-grey69">
					<div className=" flex w-1/2 justify-end">
						<button className="mx-4" onClick={() => handleScrollRef(moveHowToUseRef)}>
							How to use
						</button>
					</div>
					<div className=" flex w-1/2 justify-start">
						<button className="mx-4" onClick={() => handleScrollRef(movePeopleRef)}>
							People
						</button>
					</div>
				</div>
			</div>
			<Divider />
			<div className="mx-auto w-3/5">
				{/* 우리 서비스 소개 */}
				<div className="h-20" ref={moveHowToUseRef}></div>
				<div className="mt-20 flex flex-row justify-between">
					<div className=" my-auto text-4xl font-extrabold text-primary">
						<p className="my-2">깃허브</p>
						<p className="my-2">중요한건 아는데</p>
						<p className="my-2">동기가 필요할 때</p>
					</div>
					<div className="my-auto text-end text-sm">
						<p className="my-4">깃발은 이런분들을 위해 만들어졌습니다.</p>
						<p className="my-4"> 혼자 깃허브 활동을 하는 것이 재미가 없으신 분들</p>
						<p className="my-4">자신의 개발 실력을 뽐내고 싶으신 분들</p>
						<p className="my-4">친구들과 함께 우리 학교의 개발 실력을 널리 알리고 싶은 분들</p>
						<p className="my-4">내 지역의 코딩 실력이 뛰어남을 알리고 싶으신 분들</p>
						<p className="my-4">경쟁을 통해 자신의 실력을 확인하고, 실력 향상을 위해 달리고 싶으신 분들</p>
					</div>
				</div>

				<div>
					<p className="mt-80 text-center text-xl font-bold text-primary">Main Service</p>
					<p className="mt-4 text-center text-4xl font-bold">깃발의 랭킹 시스템을 만나보세요.</p>

					{/* 단락1 */}
					<div className="mt-20 flex flex-row justify-between">
						<div>
							<p className="mb-4 text-xl font-bold text-primary">깃허브 활동 점수화</p>
							<p className="my-2 text-3xl font-extrabold text-grey69">깃허브 활동의 점수화 </p>
							<p className="my-2 text-3xl font-extrabold text-grey69">깃발에 맡기고</p>
							<p className="my-2 text-3xl font-extrabold text-grey69">나의 실력을 확인하세요.</p>
							<div className="mt-8 text-sm">
								<p className="my-2">커밋 뿐만 아니라 pr, like 까지 깃허브의 기능을</p>
								<p className="my-2">지표로 사용해서 사용자의 점수를 분석해요.</p>
								<p className="my-2">점수에 맞는 엠블렘을 표시해 드립니다.</p>
								<p className="my-2">내 점수와 비슷한 사용자를 알려드려요.</p>
								<p className="my-2">함께 달리거나 추월해 보세요.</p>
							</div>
						</div>
						<div className=" w-2/5">
							<img src={testImg1} alt="testImg" className="rounded-xl shadow-xl" />
						</div>
					</div>

					{/* 단락2 */}
					<div className=" mt-80 flex flex-row justify-between">
						<div className=" w-2/5">
							<img src={testImg2} alt="testImg" className="rounded-xl shadow-xl" />
						</div>
						<div className=" text-end">
							<p className="mb-4 text-xl font-bold text-primary">랭킹 시스템 운영</p>
							<p className="my-2 text-3xl font-extrabold text-grey69">학교별, 지역별 랭킹을 </p>
							<p className="my-2 text-3xl font-extrabold text-grey69">보여드립니다.</p>

							<div className="mt-8 text-sm">
								<p className="my-2">소속된 학교와 지역의 랭킹을 보여드려요.</p>
								<p className="my-2">가장 큰 기여를 한 사용자에게 MVP를 드립니다.</p>
								<p className="my-2">나의 학교를, 나의 지역을, 최고의 자리에 </p>
								<p className="my-2">오를 수 있도록 여려분이 함께 해주세요.</p>
								<p className="my-2">참! 1등을 한 학교와 지역에는 상응하는 칭호를 선물로 드립니다.</p>
							</div>
						</div>
					</div>

					<p className="mt-80 text-center text-xl font-bold text-primary">Sub Service</p>
					<p className="mt-4 text-center text-4xl font-bold">다양한 칭호를 획득해보세요.</p>

					{/* 단락3 */}
					<div className=" mb-80 mt-20 flex flex-row justify-between">
						<div>
							<p className="mb-4 text-xl font-bold text-primary">칭호 시스템</p>
							<p className="my-2 text-3xl font-extrabold text-grey69">경쟁에 지치셨다고요? </p>
							<p className="my-2 text-3xl font-extrabold text-grey69">깃발에서 선물해드리는</p>
							<p className="my-2 text-3xl font-extrabold text-grey69">칭호를 모아보세요.</p>
							<div className="mt-8 text-sm">
								<p className="my-2">깃발에는 경쟁시스템만이 있는 것이 아닙니다.</p>
								<p className="my-2">사용자의 실력향상을 위한 다양한 미션과 칭호가 서비스중입니다.</p>
								<p className="my-2">아직은 코린이 일지몰라도, 매일매일 열심히 하다보면</p>
								<p className="my-2">여러분의 목표를 위한 다양한 칭호를 획득하며, 내실을 다져보세요.</p>
								<p className="my-2">히든 칭호를 찾는 재미는 덤!</p>
							</div>
						</div>
						<div className=" w-2/5">
							<img src={testImg3} alt="testImg" className="rounded-xl shadow-xl" />
						</div>
					</div>
				</div>

				{/* 우리팀 소개 */}
				<div ref={movePeopleRef} className="h-1"></div>
				<div>
					<p className="mt-40 text-center text-xl font-bold text-primary">Our Team</p>
					<p className="mt-4 text-center text-4xl font-bold">깃발의 개발자들을 소개 드립니다.</p>
					<img src={testImg4} alt="testImg" className="mt-20 rounded-xl shadow-xl" />
					<div className="mb-40 mt-10 flex flex-col">
						<div className="my-8 flex flex-row">
							<AboutPeopleCard
								name={'김효준'}
								part={'backend'}
								nickName={'자유로운 영혼'}
								gitId={'khyojun'}
								blaBla={'자유롭게 살고 싶네요.'}
							/>
							<div className="w-8"></div>
							<AboutPeopleCard
								name={'서대원'}
								part={'frontend'}
								nickName={'코리아 슬라임'}
								gitId={'suwonthugger'}
								blaBla={'저는 힙합만 들으면 자꾸 리듬을 타게 되네요.'}
							/>
						</div>
						<div className="flex flex-row">
							<AboutPeopleCard
								name={'이승준'}
								part={'backend'}
								nickName={'심심한 감자'}
								gitId={'leesj000603'}
								blaBla={'맥북 쓰고 싶어요.'}
							/>
							<div className="w-8"></div>
							<AboutPeopleCard
								name={'박우석'}
								part={'frontend'}
								nickName={'말하는 자몽'}
								gitId={'jamooooong'}
								blaBla={'아직도 맥을 안쓰시나요?'}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
