import { useContext } from "react";

import { FriendContext } from "../context/FriendsContext";
import { DeleteButton, FavouriteButton } from "../styledComponents/Button";
import { Trash, Star, StarFill } from "@styled-icons/bootstrap";

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

	return (
		<>
			{state.friendsDisplayed.map((f) => (
				<div className='card-item' key={f.id}>
					<div className='card-item-data'>
						<div className='card-text'>{f.name}</div>
						<div className='card-subtext'>is your friend</div>
					</div>
					<div>
						<DeleteButton onClick={() => handleDelete(f)}>
							<Trash size='20' />
						</DeleteButton>
						<FavouriteButton onClick={() => handleFavourite(f)}>
							{f.isFavourite ? <StarFill size='20' /> : <Star size='20' />}
						</FavouriteButton>
					</div>
				</div>
			))}
		</>
	);
};

export default CardContent;
