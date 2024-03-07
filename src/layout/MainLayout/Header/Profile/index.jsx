import { Link } from 'react-router-dom';
import image from '../../../../assets/react.svg';

export default function Profile() {
	return (
		<Link to={'/my-page'}>
			<img src={image} className="h-8 w-8 rounded-full bg-black" />
		</Link>
	);
}
