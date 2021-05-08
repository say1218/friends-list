import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
import friendListReducer from "./reducer/friendListReducer";
import Card from "./styledComponents/Card";
import Input from "./styledComponents/Input";
import { DeleteButton, FavouriteButton } from "./styledComponents/Button";
import { Trash, Star, StarFill } from "@styled-icons/bootstrap";

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
				<ul>
					<Card>
						<div className='card-container'>
							<Input type='text' onKeyDown={(e) => addFriend(e)} />
							{/* <input type='text' onKeyDown={(e) => addFriend(e)} required /> */}
							{friends.map((f) => (
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
