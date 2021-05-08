const friendListReducer = (state, action) => {
	switch (action.type) {
		case "ADD_FRIEND":
			return [...state, action.payload];
		case "DELETE_FRIEND":
			const deletedFriend = action.payload;
			return state.filter((friend) => friend.id !== deletedFriend.id);
		case "FAVOURITE_FRIEND":
			return state.map((friend) => {
				if (friend.id === action.payload.id) {
					return { ...friend, isFavourite: !friend.isFavourite };
				} else {
					return friend;
				}
			});
		default:
			return state;
	}
};

export default friendListReducer;
