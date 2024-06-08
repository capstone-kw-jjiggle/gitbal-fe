import { LargeProfileImage } from '@components/ProfileImage';
import levelImage from '@/assets/images/userLevel/userLevel3.svg';

export default function MyProfile({ userInfo }) {
	const { userName, univName, regionName, imagName } = userInfo;
	return (
		<div className="mt-3 flex">
			<LargeProfileImage imageURL={imagName} />
			<div className="ml-8 flex flex-col justify-center gap-1 text-xl font-extrabold">
				<p className="font-bold text-primary">&quot;부지런히&quot; + &quot;열일하는&quot;</p>
				<div className="mt-1 flex">
					<p className="text-2xl font-extrabold">{userName}</p>
					<img src={levelImage} className="ml-2 h-9 w-9" />
				</div>
				<p>{univName}</p>
				<p>{regionName}</p>
			</div>
		</div>
	);
}
