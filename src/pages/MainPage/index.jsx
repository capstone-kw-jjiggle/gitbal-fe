import MainContainer from '../../components/MainContainer';
import logo from '../../assets/images/userLevel/userLevel3.svg';

export default function MainPage() {
	return (
		<>
			<MainContainer>
				<div className="mt-16 flex w-full flex-col">
					<div className="mx-auto flex w-3/5 flex-row">
						<div className="flex w-1/2 flex-col items-center justify-start ">
							<div>
								<img src={logo} className="h-48 w-48" />
							</div>
							<div className="mt-10 flex flex-col ">
								<div className="flex flex-row text-lg">
									<p className="font-light">학교 1위</p>
									<p className="ml-10 font-medium">광운대학교</p>
								</div>
								<div className="mt-3 flex flex-row text-lg">
									<p className="font-light">지역 1위</p>
									<p className="ml-10 font-medium">경상도</p>
								</div>
							</div>
						</div>
						<div className="flex w-1/2 flex-row items-start justify-center ">
							<div className="flex flex-col items-start justify-start">
								<div className=" flex flex-col text-7xl font-bold">
									<h1 className=" text-primary">
										<span className="text-black19">깃</span>허브에서
									</h1>
									<h1 className="mt-8 text-primary">
										<span className="text-black19">발</span>로 뛰자
									</h1>
								</div>
								<div className="ml-2 mt-14 flex flex-col">
									<div className="text-lg font-normal text-primary">
										<p>우리 학교, 우리 지역 깃허브 순위는 ?</p>
									</div>
									<div className="mt-3 flex items-center justify-center">
										<button className="h-8 w-32 rounded bg-primary text-sm font-bold text-white shadow-lg">
											학교 순위
										</button>
										<button className="ml-2 h-8 w-32 rounded bg-primary text-sm font-bold text-white shadow-lg">
											지역 순위
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16">
						<div className="flex flex-col items-center justify-start">
							<p className="text-lg text-primary">깃허브 통계를 통한 개발자 순위를 알아보세요</p>
						</div>
					</div>
					<div className="mt-4">
						<div className="flex flex-col items-center justify-start">
							<input
								className="h-16 w-6/12 rounded-xl border border-greyD9 p-4 text-lg shadow-lg"
								type="text"
								placeholder="github ID"
							/>
						</div>
					</div>
				</div>
			</MainContainer>
			<br />
			<br />
			<MainContainer>
				<div className="flex flex-col items-center justify-start">
					<table className="mx-auto w-4/5 border-collapse border border-greyD9 text-lg font-light">
						<thead className="h-14 ">
							<tr className="border border-b-gray-500 font-thin">
								<th className="font-normal">순위</th>
								<th className="font-normal">아이디</th>
								<th className="font-normal">깃발</th>
								<th className="font-normal">점수</th>
							</tr>
						</thead>
						<tbody>
							<tr className="h-14 border border-greyD9 text-center text-lg hover:bg-gray-100">
								<td>1</td>
								<td>suwonthugger</td>
								<td>🇰🇷</td>
								<td>95</td>
							</tr>
							<tr className="h-14 border border-greyD9 text-center text-lg hover:bg-gray-100">
								<td>1</td>
								<td>User1</td>
								<td>🇰🇷</td>
								<td>95</td>
							</tr>
							<tr className="h-14 border border-greyD9 text-center text-lg hover:bg-gray-100">
								<td>1</td>
								<td>User1</td>
								<td>🇰🇷</td>
								<td>95</td>
							</tr>
						</tbody>
					</table>
				</div>
			</MainContainer>
		</>
	);
}
