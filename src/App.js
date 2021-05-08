import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer } from "react";
import friendListReducer from "./util/friendListReducer";

const friendsListData = [
	{ id: "1234", name: "Dave", isFavourite: false },
	{ id: "5678", name: "Alice", isFavourite: true },
	{ id: "9012", name: "Sarah", isFavourite: false },
];

function App() {
	const [friends, dispatchFriendsAction] = useReducer(
		friendListReducer,
		friendsListData
	);

	const addFriend = (e) => {
		if (e.key === "Enter") {
			dispatchFriendsAction({
				type: "ADD_FRIEND",
				payload: {
					id: Date.now(),
					name: e.target.value,
					isFavourite: false,
				},
			});
		}
	};

	function handleFavourite(f) {
		dispatchFriendsAction({
			type: "FAVOURITE_FRIEND",
			payload: { ...f },
		});
	}

	function handleDelete(f) {
		dispatchFriendsAction({
			type: "DELETE_FRIEND",
			payload: { ...f },
		});
	}

	return (
		<div className='App'>
			<div>
				<input type='text' onKeyDown={(e) => addFriend(e)} />

				<ul>
					{friends.map((f) => (
						<>
							<li key={f.id}>{f.name}</li>
							<button onClick={() => handleDelete(f)}>Delete</button>
							<button onClick={() => handleFavourite(f)}>Favourite</button>
							{f.isFavourite ? "LOVE" : "NO-LOVE"}
						</>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
