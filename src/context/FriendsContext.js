import React, { createContext, useReducer } from "react";
import friendListReducer from "./../reducer/friendListReducer";

export const FriendContext = createContext(null);

const friendsListData = [
	{ id: "1234", name: "Dave", isFavourite: false },
	{ id: "5678", name: "Alice", isFavourite: true },
	{ id: "9012", name: "Sarah", isFavourite: false },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
	const [state, dispatch] = useReducer(friendListReducer, friendsListData);

	return (
		<FriendContext.Provider value={{ state, dispatch }}>
			{children}
		</FriendContext.Provider>
	);
};
