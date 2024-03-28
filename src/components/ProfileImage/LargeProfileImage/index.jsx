import { Link } from 'react-router-dom';
import image from '@/assets/react.svg';

export const LargeProfileImage = () => {
	return (
		<Link to="/my-page">
			<img src={image} className="h-40 w-40 rounded-full bg-black shadow-xl" />
		</Link>
	);
};
