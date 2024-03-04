import PropTypes from 'prop-types';

export default function EdgeText({ rotate }) {
	return (
		<div className="flex w-1/6 items-center justify-center">
			<p className={`fixed top-80 pb-36 font-bold ${rotate}`}>Gitbal</p>
		</div>
	);
}

EdgeText.propTypes = {
	rotate: PropTypes.string.isRequired,
};
