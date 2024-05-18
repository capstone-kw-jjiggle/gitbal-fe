import { useState } from 'react';
import PageNumber from '@/pages/MainPage/components/PageNumber';
import PageNavigationButton from '@/pages/MainPage/components/PageNavigationButton';

const pageData = {
	totalPages: 200,
	currentPageNumber: 2,
};

export default function Pagination() {
	const [currentPage, setCurrentPage] = useState(1);
	const [currentSet, setCurrentSet] = useState(1);

	const btnRange = Math.min(10, pageData.totalPages);
	const maxPageNumberVisible = btnRange;
	const maxSet = Math.ceil(pageData.totalPages / maxPageNumberVisible);

	const startPage = btnRange * (currentSet - 1) + 1;
	let endPage = Math.min(startPage + btnRange - 1, pageData.totalPages);

	const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

	return (
		<ul className="mt-8 flex gap-4">
			{currentSet > 1 && (
				<PageNavigationButton onNavigatePage={setCurrentSet} isNext={false}>
					{'<'}
				</PageNavigationButton>
			)}
			{pageNumbers.map((number) => (
				<PageNumber key={number} number={number} onSetPage={setCurrentPage} currentPage={currentPage}>
					{number}
				</PageNumber>
			))}
			{currentSet < maxSet && (
				<PageNavigationButton onNavigatePage={setCurrentSet} isNext={true}>
					{'>'}
				</PageNavigationButton>
			)}
		</ul>
	);
}
