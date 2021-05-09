import { useContext, useEffect } from "react";

import { FriendContext } from "../context/FriendsContext";
import { Button, ButtonNoBorder } from "../styledComponents/Button";
import { Trash, Star, StarFill } from "@styled-icons/bootstrap";

import usePagination from "../hooks/usePagination";

const CardContent = () => {
	const { state, dispatch } = useContext(FriendContext);

	function handleFavourite(f) {
		dispatch({
			type: "FAVOURITE_FRIEND",
			payload: { ...f },
		});
	}

	function handleDelete(f) {
		dispatch({
			type: "DELETE_FRIEND",
			payload: { ...f },
		});
	}

	let {
		paginatedData,
		setData,
		goToPrevPage,
		goToNextPage,
		currentPage,
		pages,
	} = usePagination({
		itemsPerPage: 3,
		data: [...state.friendsDisplayed],
	});

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		setData();
	}, [state.friendsDisplayed]);

	return (
		<>
			{paginatedData.length > 0 &&
				paginatedData.map((f) => (
					<div className='card-item' key={f.id}>
						<div className='card-item-data'>
							<div className='card-text'>{f.name}</div>
							<div className='card-subtext'>is your friend</div>
						</div>
						<div>
							<ButtonNoBorder onClick={() => handleDelete(f)}>
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
					</div>
				))}
			{paginatedData.length > 0 && (
				<div>
					<Button onClick={goToPrevPage} disabled={currentPage === 1}>
						Previous
					</Button>
					<Button onClick={goToNextPage} disabled={currentPage === pages}>
						Next
					</Button>
				</div>
			)}
		</>
	);
};

export default CardContent;
