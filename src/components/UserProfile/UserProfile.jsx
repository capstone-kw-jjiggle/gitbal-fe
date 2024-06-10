import { LargeProfileImage } from '@components/ProfileImage';

import levelImage from '@/assets/images/userLevel/userLevel3.svg';

export default function UserProfile() {
	return (
		<div className="mt-3 flex">
			<LargeProfileImage />
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
	);
}
