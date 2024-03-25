import { Link } from 'react-router-dom';
import image from '@/assets/react.svg';

export default function ProfileImage() {
	return (
		<Link to="/my-page">
			<img src={image} className="h-40 w-40 rounded-full bg-black shadow-2xl" />
		</Link>
	);
}
