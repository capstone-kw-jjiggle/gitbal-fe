import level1 from '@/assets/images/userLevel/userLevel1.svg';
import level2 from '@/assets/images/userLevel/userLevel2.svg';
import level3 from '@/assets/images/userLevel/userLevel3.svg';
import level4 from '@/assets/images/userLevel/userLevel4.svg';
import level5 from '@/assets/images/userLevel/userLevel5.svg';
import level6 from '@/assets/images/userLevel/userLevel6.svg';

const getLevelImage = (level) => {
	let imageURL;

	switch (level) {
		case 'YELLOW':
			imageURL = level1;
			break;
		case 'GREEN':
			imageURL = level2;
			break;
		case 'BLUE':
			imageURL = level3;
			break;
		case 'RED':
			imageURL = level4;
			break;
		case 'GREY':
			imageURL = level5;
			break;
		case 'PURPLE':
			imageURL = level6;
			break;
		default:
			imageURL = level1;
	}

	return imageURL;
};

export default getLevelImage;
