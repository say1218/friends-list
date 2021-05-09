const friendListReducer = (state, action) => {
	switch (action.type) {
		case "ADD_FRIEND": {
			console.log("add friend");
			let newState = [...state.friendsState, action.payload];
			return {
				friendsState: [...newState],
				friendsDisplayed: [...newState],
			};
		}
		case "DELETE_FRIEND": {
			console.log("delete friend");
			const deletedFriend = action.payload;
			let newState = state.friendsState.filter(
				(friend) => friend.id !== deletedFriend.id
			);
			return {
				friendsState: [...newState],
				friendsDisplayed: [...newState],
			};
		}
		case "FAVOURITE_FRIEND": {
			console.log("star friend");
			let newState = state.friendsState.map((friend) => {
				if (friend.id === action.payload.id) {
					return { ...friend, isFavourite: !friend.isFavourite };
				} else {
					return friend;
				}
			});
			return {
				friendsState: [...newState],
				friendsDisplayed: [...newState],
			};
		}
		case "FIND_FRIEND": {
			let newState;
			if (action.payload === "") {
				newState = [...state.friendsState];
			} else {
				newState = state.friendsState.filter((friend) =>
					friend.name.toLowerCase().includes(action.payload)
				);
				console.log("new state in reducer -->", newState);
			}
			return {
				friendsState: [...state.friendsState],
				friendsDisplayed: [...newState],
			};
		}

		case "SORT_FRIEND": {
			let sortedArray = state.friendsState.sort(function (a, b) {
				return b[action.payload] - a[action.payload];
			});
			console.log("new state in sort -->", sortedArray);
			return {
				friendsState: [...sortedArray],
				friendsDisplayed: [...sortedArray],
			};
		}
		default:
			return state;
	}
};

export default friendListReducer;
