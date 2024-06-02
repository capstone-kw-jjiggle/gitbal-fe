import { useState } from 'react';
import PageNumber from '@/pages/SchoolPage/components/PageNumber';
import PageNavigationButton from '@/pages/SchoolPage/components/PageNavigationButton';

export default function Pagination({ totalPages, currentPage, onSetCurrentPage }) {
	const [currentSet, setCurrentSet] = useState(1);

	const btnRange = Math.min(10, totalPages);
	const maxPageNumberVisible = btnRange;
	const maxSet = Math.ceil(totalPages / maxPageNumberVisible);

	const startPage = btnRange * (currentSet - 1) + 1;
	let endPage = Math.min(startPage + btnRange - 1, totalPages);

	const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

	return (
		<ul className="flex">
			<PageNavigationButton onNavigatePage={() => setCurrentSet(1)} currentSet={currentSet} maxSet={maxSet}>
				{'<<'}
			</PageNavigationButton>
			<PageNavigationButton
				onNavigatePage={() => currentSet > 1 && setCurrentSet((prev) => prev - 1)}
				currentSet={currentSet}
				maxSet={maxSet}>
				{'<'}
			</PageNavigationButton>

			{pageNumbers.map((number) => (
				<PageNumber
					key={number}
					number={number}
					onSetPage={onSetCurrentPage}
					currentPage={currentPage}
					btnRange={btnRange}>
					{number}
				</PageNumber>
			))}

			<PageNavigationButton
				onNavigatePage={() => currentSet < maxSet && setCurrentSet((prev) => prev + 1)}
				currentSet={currentSet}
				maxSet={maxSet}>
				{'>'}
			</PageNavigationButton>
			<PageNavigationButton onNavigatePage={() => setCurrentSet(maxSet)} currentSet={currentSet} maxSet={maxSet}>
				{'>>'}
			</PageNavigationButton>
		</ul>
	);
}
