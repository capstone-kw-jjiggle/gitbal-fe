import level1 from '@/assets/images/regionLevel/regionLevel1.svg';
import level2 from '@/assets/images/regionLevel/regionLevel2.svg';
import level3 from '@/assets/images/regionLevel/regionLevel3.svg';
import level4 from '@/assets/images/regionLevel/regionLevel4.svg';

const getRegionImage = (rank) => {
	let imageURL;

	switch (rank) {
		case 1:
			imageURL = level4;
			break;
		case 2:
			imageURL = level3;
			break;
		case 3:
			imageURL = level2;
			break;
		case 4:
			imageURL = level1;
			break;
		default:
			imageURL = level1;
	}

	return imageURL;
};

export default getRegionImage;
