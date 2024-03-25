import MainContainer from '../../components/MainContainer';
import logo from '../../assets/images/userLevel/userLevel3.svg';
import Table from './Table';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/constants/routes';

export default function MainPage() {
	const navigate = useNavigate();

	return (
		<>
			<MainContainer>
				<div className="mt-16 flex w-full flex-col">
					<div className="mx-auto flex w-full flex-row justify-center">
						<div className="flex flex-col items-center justify-start">
							<div>
								<img src={logo} className="h-48 w-48" />
							</div>
							<div className="mt-11 flex flex-col ">
								<div className="flex flex-row text-lg">
									<p className="font-light">학교 1위</p>
									<p className="ml-10 font-semibold">광운대학교</p>
								</div>
								<div className="mt-3 flex flex-row text-lg">
									<p className="font-light">지역 1위</p>
									<p className="ml-10 font-semibold">경상도</p>
								</div>
							</div>
						</div>
						<div className="ml-24 flex flex-row">
							<div className="flex flex-col items-start justify-start">
								<div className="flex flex-col text-7xl font-extrabold">
									<h1 className=" text-primary">
										<span className="text-black19">깃</span>허브에서
									</h1>
									<h1 className="ml-1 mt-8 text-primary">
										<span className="text-black19">발</span>로 뛰자
									</h1>
								</div>
								<div className="ml-2 mt-14 flex flex-col">
									<div className="text-lg font-normal text-primary">
										<p>우리 학교, 우리 지역 깃허브 순위는 ?</p>
									</div>
									<div className="mt-3 flex items-center justify-start">
										<button
											onClick={() => {
												navigate(routes.school);
											}}
											className="h-8 w-32 rounded bg-primary text-sm font-bold text-white shadow-lg">
											학교 순위
										</button>
										<button
											onClick={() => {
												navigate(routes.region);
											}}
											className="ml-2 h-8 w-32 rounded bg-primary text-sm font-bold text-white shadow-lg">
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
								className="h-16 w-6/12 rounded-xl border border-greyD9 p-4 text-lg shadow-md"
								type="text"
								placeholder="github ID"
							/>
						</div>
					</div>
				</div>
				<div className="mt-20 flex flex-col items-center justify-start">
					<Table />
					<Pagination />
				</div>
			</MainContainer>
		</>
	);
}
