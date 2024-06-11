const 객체배열로변환하는함수 = (데이터) => {
	const 객체배열로변환된값 = 데이터.map((아이템) => {
		const 변환된아이템 = { label: 아이템, value: 아이템 };
		return 변환된아이템;
	});
	const 최종변환값 = [{ label: '선택없음', value: '선택없음' }, ...객체배열로변환된값];

	return 최종변환값;
};

export default 객체배열로변환하는함수;
