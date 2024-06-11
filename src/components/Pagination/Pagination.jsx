import { useState } from 'react';
import PageNumber from '@/components/Pagination/PageNumber';
import PageNavigationButton from '@/components/Pagination/PageNavigationButton';

export default function Pagination({ totalPages, currentPage, onSetCurrentPage }) {
	const btnRange = Math.min(10, totalPages);
	const [currentSet, setCurrentSet] = useState(Math.ceil(currentPage / btnRange));

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
