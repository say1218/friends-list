import { useContext, useEffect, useState, useRef } from "react";

import usePagination from "../hooks/usePagination";
import { FriendContext } from "../context/FriendsContext";
import Modal from "../components/Modal";
import { Button, ButtonNoBorder } from "../styledComponents/Button";
import Pills from "../styledComponents/Pills";

import {
	Trash,
	Star,
	StarFill,
	ArrowRightCircle,
	ArrowLeftCircle,
} from "@styled-icons/bootstrap";

const CardContent = () => {
	const { state, dispatch } = useContext(FriendContext);
	const [isOpen, setIsOpen] = useState(false);
	const friendSelected = useRef({});

	let {
		paginatedData,
		setData,
		goToPrevPage,
		goToNextPage,
		currentPage,
		pages,
	} = usePagination({
		itemsPerPage: 4,
		data: [...state.friendsDisplayed],
	});

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		setData();
	}, [state.friendsDisplayed]);

	const handleFavourite = (f) => {
		dispatch({
			type: "FAVOURITE_FRIEND",
			payload: { ...f },
		});
	};

	const handleDelete = (f) => {
		friendSelected.current = { ...f };
		toggleOpen();
	};

	const handleSort = () => {
		dispatch({
			type: "SORT_FRIEND",
			payload: "isFavourite",
		});
	};

	const confirmDelete = (e) => {
		dispatch({
			type: "DELETE_FRIEND",
			payload: { ...friendSelected.current },
		});
		friendSelected.current = {};
		setIsOpen(!isOpen);
		if (paginatedData.length - 1 === 0) {
			goToPrevPage(e);
		}
	};

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Pills onClick={handleSort}>Favourites</Pills>
			{paginatedData.length > 0 &&
				paginatedData.map((f) => (
					<div className='card-item' key={f.id}>
						<div className='card-item-data'>
							<div className='card-text'>{f.name}</div>
							<div className='card-subtext'>is your friend</div>
						</div>
						<div>
							<ButtonNoBorder
								onClick={(e) => {
									e.preventDefault();
									handleDelete(f);
								}}>
								<Trash size='20' />
							</ButtonNoBorder>
							<ButtonNoBorder
								color=' #ffd700'
								onClick={(e) => {
									e.preventDefault();
									handleFavourite(f);
								}}>
								{f.isFavourite ? <StarFill size='20' /> : <Star size='20' />}
							</ButtonNoBorder>
						</div>
						<Modal open={isOpen} onClose={toggleOpen}>
							<h1>
								Are you sure you want to delete {friendSelected.current.name}?
							</h1>
							<div>
								<Button
									onClick={toggleOpen}
									background='#e62c1e'
									color='#ffffff'>
									Cancel
								</Button>
								<Button
									background='#8bc34a'
									color='#ffffff'
									onClick={(e) => {
										confirmDelete(e);
									}}>
									Yes
								</Button>
							</div>
						</Modal>
					</div>
				))}
			{paginatedData.length > 0 && (
				<div style={{ textAlign: "center" }}>
					<Button
						onClick={goToPrevPage}
						disabled={currentPage === 1}
						color='black'>
						<ArrowLeftCircle size='30' />
					</Button>
					<Button
						onClick={goToNextPage}
						disabled={currentPage === pages}
						color='black'>
						<ArrowRightCircle size='30' />
					</Button>
				</div>
			)}
		</>
	);
};

export default CardContent;
