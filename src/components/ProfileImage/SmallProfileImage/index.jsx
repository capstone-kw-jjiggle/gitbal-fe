import { Link } from 'react-router-dom';
import image from '@/assets/react.svg';
import questionMark from '@/assets/images/icon/question_mark.svg';

export const SmallProfileImage = ({ imageURL }) => {
	const profileURL = imageURL ? imageURL : questionMark;

	return (
		<Link to="/my-page">
			<img src={profileURL} className="h-8 w-8 rounded-full" />
		</Link>
	);
};
