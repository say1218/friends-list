import React, { createContext, useReducer } from "react";
import friendListReducer from "./../reducer/friendListReducer";

export const FriendContext = createContext(null);

const friendsListData = [
	{ id: "1234", name: "Dave", isFavourite: false },
	{ id: "5678", name: "Alice", isFavourite: true },
	{ id: "9012", name: "Sarah", isFavourite: false },
	{ id: "1334", name: "Harry", isFavourite: false },
	{ id: "6783", name: "Ron", isFavourite: true },
	{ id: "9232", name: "John", isFavourite: false },
	{ id: "0934", name: "David", isFavourite: false },
	{ id: "5928", name: "April", isFavourite: true },
	{ id: "9412", name: "Glenn", isFavourite: false },
];

const stateObj = {
	friendsState: [...friendsListData],
	friendsDisplayed: [...friendsListData],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
	const [state, dispatch] = useReducer(friendListReducer, stateObj);

	return (
		<FriendContext.Provider value={{ state, dispatch }}>
			{children}
		</FriendContext.Provider>
	);
};
