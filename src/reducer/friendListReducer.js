const friendListReducer = (state, action) => {
	switch (action.type) {
		case "ADD_FRIEND":
			console.log("in reducer adding");
			let newState = [...state, action.payload];
			return newState;
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
		case "FIND_FRIEND":
			if (!action.payload) {
				return state;
			} else {
				return state.filter((friend) =>
					friend.name.toLowerCase().includes(action.payload)
				);
			}
		case "SORT_FRIEND": {
			let sortedArray = state.sort(function (a, b) {
				return b[action.payload] - a[action.payload];
			});
			return [...sortedArray];
		}
		default:
			return state;
	}
};

export default friendListReducer;
