import logo from "./logo.svg";
import "./App.css";
import { useRef, useContext, useEffect } from "react";
import { FriendContext } from "./context/FriendsContext";

//import friendListReducer from "./reducer/friendListReducer";
import Card from "./styledComponents/Card";
import Input from "./styledComponents/Input";
import Pills from "./styledComponents/Pills";
import { DeleteButton, FavouriteButton } from "./styledComponents/Button";
import {
	Trash,
	Star,
	StarFill,
	ArrowUp,
	Search,
} from "@styled-icons/bootstrap";

function App() {
	const { state, dispatch } = useContext(FriendContext);
	const inputText = useRef("test");

	const addFriend = (e) => {
		dispatch({
			type: "ADD_FRIEND",
			payload: {
				id: Date.now(),
				name: inputText.current.value,
				isFavourite: false,
			},
		});
		inputText.current.value = "";
	};

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

	// function handleSearch() {
	// 	console.log(inputText.current.value);
	// 	dispatch({
	// 		type: "FIND_FRIEND",
	// 		payload: inputText.current.value.toLowerCase(),
	// 	});
	// }
	// onKeyPress={handleSearch}

	function handleSort() {
		console.log("sorting");
		dispatch({
			type: "SORT_FRIEND",
			payload: "isFavourite",
		});
	}

	return (
		<div className='App'>
			<div>
				<ul>
					<Card>
						<div className='card-container'>
							<Input
								type='text'
								onKeyDown={(event) => {
									if (event.key === "Enter") {
										addFriend(event);
									}
								}}
								ref={inputText}
							/>
							<Pills onClick={handleSort}>Favourites</Pills>

							<Pills>Search Mode</Pills>
							{state.map((f) => (
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
											{f.isFavourite ? (
												<StarFill size='20' />
											) : (
												<Star size='20' />
											)}
										</FavouriteButton>
									</div>
								</div>
							))}
						</div>
					</Card>
				</ul>
			</div>
		</div>
	);
}

export default App;
