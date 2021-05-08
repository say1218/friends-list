import "./App.css";
import { useRef, useContext } from "react";
import { FriendContext } from "./context/FriendsContext";

import CardContent from "./components/CardContent";
import Card from "./styledComponents/Card";
import Input from "./styledComponents/Input";
import Pills from "./styledComponents/Pills";

function App() {
	const { state, dispatch } = useContext(FriendContext);
	const inputText = useRef("test");

	const addFriend = (e) => {
		if (!inputText.current.value) {
			alert("Enter a valid name");
		} else if (state.friendsDisplayed.length === 0) {
			dispatch({
				type: "ADD_FRIEND",
				payload: {
					id: Date.now(),
					name: inputText.current.value,
					isFavourite: false,
				},
			});
		} else {
			alert("You have a friend with the same name!!");
		}
		inputText.current.value = "";
	};

	function handleSearch() {
		console.log(inputText.current.value);
		dispatch({
			type: "FIND_FRIEND",
			payload: inputText.current.value
				? inputText.current.value.toLowerCase()
				: "",
		});
	}

	function handleSort() {
		console.log("sorting");
		dispatch({
			type: "SORT_FRIEND",
			payload: "isFavourite",
		});
	}

	return (
		<Card>
			<div className='card-container'>
				<Input
					type='text'
					placeholder="Enter your friend's name"
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							addFriend(event);
						}
					}}
					onKeyPress={handleSearch}
					onKeyUp={handleSearch}
					ref={inputText}
				/>
				<Pills onClick={handleSort}>Favourites</Pills>
				<CardContent />
				{!state.friendsDisplayed.length && (
					<p>You have no friends with this name Click Enter to Add</p>
				)}
			</div>
		</Card>
	);
}

export default App;
