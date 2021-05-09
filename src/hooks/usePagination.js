import { useState } from "react";

const usePagination = (initialState) => {
	let { itemsPerPage, data } = initialState;
	const perPage = itemsPerPage ? itemsPerPage : 4;
	const pages = Math.ceil(data.length / perPage);
	const [currentPage, setCurrentPage] = useState(1);
	const [paginatedData, setPaginatedData] = useState([]);

	const setData = (n) => {
		let current = n ? n : currentPage;
		setCurrentPage(current);
		setPaginatedData(() =>
			[...data].slice((current - 1) * perPage, current * perPage)
		);
	};

	const goToPrevPage = (e) => {
		e.preventDefault();
		setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
		if (currentPage !== 1) {
			setPaginatedData(
				[...data].slice(
					(currentPage - 2) * perPage,
					(currentPage - 1) * perPage
				)
			);
		}
	};

	const goToNextPage = (e) => {
		e.preventDefault();
		setCurrentPage(currentPage < pages ? currentPage + 1 : currentPage);
		if (currentPage !== pages) {
			setPaginatedData(
				[...data].slice(currentPage * perPage, (currentPage + 1) * perPage)
			);
		}
	};

	return {
		paginatedData,
		setData,
		goToPrevPage,
		goToNextPage,
		currentPage,
		pages,
	};
};

export default usePagination;
