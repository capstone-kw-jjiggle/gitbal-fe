import levelImage from '@/assets/images/userLevel/userLevel3.svg';

export const DomainInfoCard = ({ title, domainData, levelImage }) => {
	const { mvpName, mvpTotalScore, mySchoolName, mySchoolRank, totalSchoolScore } = domainData;

	return (
		<div className="ml-8 flex w-1/2 flex-col gap-2 rounded-xl border border-gray-200 px-12 py-16 shadow-lg">
			<div className="flex justify-between text-3xl">
				<div className="flex font-extrabold">
					<h2>나의 {title}</h2>
					<p className="ml-10">{mySchoolRank}위</p>
				</div>
				<img src={levelImage} className="h-14 w-14" />
			</div>
			<div className="flex text-xl">
				<p className="font-semibold">{mySchoolName} </p>
				<p className="ml-16">{totalSchoolScore.toLocaleString()} 점</p>
			</div>
			<div className="flex items-baseline justify-between text-xl">
				<div className="flex items-center ">
					<p className="font-semibold">최대 기여자</p>
					<p className="ml-16 font-light">{mvpName}</p>
				</div>
				<p className="text-sm text-green-600">{mvpTotalScore.toLocaleString()} 점 기여</p>
			</div>
		</div>
	);
};
