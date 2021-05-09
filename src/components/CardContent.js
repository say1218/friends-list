import { useContext, useEffect, useRef } from "react";

import { FriendContext } from "../context/FriendsContext";
import { DeleteButton, FavouriteButton } from "../styledComponents/Button";
import { Trash, Star, StarFill } from "@styled-icons/bootstrap";

import usePagination from "../hooks/usePagination";

const CardContent = () => {
	const { state, dispatch } = useContext(FriendContext);

	function handleFavourite(f) {
		dispatch({
			type: "FAVOURITE_FRIEND",
			payload: { ...f },
		});
		setData();
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

	useEffect(() => {
		setData();
	});

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
							<DeleteButton onClick={() => handleDelete(f)}>
								<Trash size='20' />
							</DeleteButton>
							<FavouriteButton
								onClick={(e) => {
									e.preventDefault();
									handleFavourite(f);
								}}>
								{f.isFavourite ? <StarFill size='20' /> : <Star size='20' />}
							</FavouriteButton>
						</div>
					</div>
				))}
			<button onClick={goToPrevPage} disabled={currentPage === 1}>
				Previous
			</button>
			<button onClick={goToNextPage} disabled={currentPage === pages}>
				Next
			</button>
		</>
	);
};

export default CardContent;
