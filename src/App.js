import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const friendsListData = [
	{ name: "Dave", favourite: true },
	{ name: "Alice", favourite: true },
	{ name: "Sarah", favourite: false },
];

function App() {
	let [friendsList, setFriendsList] = useState(friendsListData);

	const addFriend = (e) => {
		if (e.key === "Enter") {
			let updateFriendsList = [
				...friendsList,
				{ name: e.target.value, favourite: false },
			];
			setFriendsList(updateFriendsList);
		}
	};

	return (
		<div className='App'>
			<div>
				<input type='text' onKeyDown={addFriend} />

				<ul>
					{friendsList.map((f) => (
						<>
							<li key={f.name}>{f.name}</li>
							<button>Delete</button>
							<button>Favourite</button>
						</>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
