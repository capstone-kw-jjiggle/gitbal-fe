import { Link } from 'react-router-dom';
import image from '@/assets/react.svg';

export const SmallProfileImage = ({ imageURL }) => {
	const profileURL = imageURL ? imageURL : image;

	return (
		<Link to="/my-page">
			<img src={profileURL} className="h-8 w-8 rounded-full bg-black" />
		</Link>
	);
};
