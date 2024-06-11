import Lottie from 'react-lottie';
import LottieData from '@/assets/images/lottieFiles/loadingMotion.json';
import React, { useState, useEffect } from 'react';

export default function LoadingPage() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: LottieData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	const [textIndex, setTextIndex] = useState(0);
	const texts = [
		'데이터를 가지고 달려오고 있어요!',
		'장애물을 피해 달리고 있어요.',
		'잠시만 기다려주세요!',
		'거의 다 왔어요!',
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
		}, 2000);

		return () => clearInterval(interval);
	});

	return (
		<>
			<div className="my-auto flex h-max w-full flex-col place-items-center">
				<div className=" my-auto">
					<Lottie options={defaultOptions} height={210} width={300} isClickToPauseDisabled />
					<p className="mt-2  text-center text-sm font-semibold text-primary">{texts[textIndex]}</p>
				</div>
			</div>
		</>
	);
}
