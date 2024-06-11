import { Link } from 'react-router-dom';
import image from '@/assets/react.svg';

export const LargeProfileImage = ({ imageURL }) => {
	return (
		<Link to="/my-page">
			<img src={imageURL} className="aspect-w-1 aspect-h-1 h-40 w-40 rounded-full bg-black shadow-xl" />
		</Link>
	);
};
