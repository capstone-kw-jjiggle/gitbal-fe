import Lottie from 'react-lottie';
import LottieData from '@/assets/images/lottieFiles/UnderDevelopment.json';
import React, { useState, useEffect } from 'react';

export default function MobileBannedPage() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: LottieData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	const [textIndex, setTextIndex] = useState(0);
	const texts = ['PC환경으로 접속해주세요!', '모바일은 준비중이에요!', '열심히 공사중', '정식 배포에서 만나요'];

	useEffect(() => {
		const interval = setInterval(() => {
			setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
		}, 2000);

		return () => clearInterval(interval);
	});

	return (
		<>
			<div className="my-auto flex h-screen w-full flex-col place-items-center">
				<div className=" my-auto">
					<Lottie options={defaultOptions} height={210} width={300} isClickToPauseDisabled />
					<p className="mt-2  text-center text-sm font-semibold text-primary">{texts[textIndex]}</p>
				</div>
			</div>
		</>
	);
}
