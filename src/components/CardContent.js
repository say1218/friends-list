import { useContext, useEffect, useState, useRef } from "react";

import usePagination from "../hooks/usePagination";
import { FriendContext } from "../context/FriendsContext";
import Modal from "../components/Modal";
import { Button, ButtonNoBorder } from "../styledComponents/Button";
import Pills from "../styledComponents/Pills";
import Input from "../styledComponents/Input";

import {
	Trash,
	Star,
	StarFill,
	ArrowRightCircle,
	ArrowLeftCircle,
} from "@styled-icons/bootstrap";

const CardContent = () => {
	const { state, dispatch } = useContext(FriendContext);
	const [isOpen, setIsOpen] = useState(false);
	const friendSelected = useRef({});
	const inputText = useRef("");
	const isSearching = useRef(false);
	const isSorting = useRef(false);
	let showMessage = useRef(state ? state.friendsDisplayed.length : 0);

	let {
		paginatedData,
		setData,
		goToPrevPage,
		goToNextPage,
		currentPage,
		pages,
	} = usePagination({
		itemsPerPage: 4,
		data: state ? [...state.friendsDisplayed] : [],
	});

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		if (isSearching.current || isSorting.current) {
			setData(1);
		} else {
			setData();
		}
		showMessage.current = state ? state.friendsDisplayed.length : 0;
	}, [state]);

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

	const handleSearch = () => {
		isSearching.current = true;
		let inputData = inputText.current.value
			? inputText.current.value.toLowerCase()
			: "";
		dispatch({
			type: "FIND_FRIEND",
			payload: inputData,
		});
		setTimeout(() => {
			isSearching.current = false;
		}, 3000);
	};

	const handleFavourite = (f) => {
		dispatch({
			type: "FAVOURITE_FRIEND",
			payload: { ...f },
		});
	};

	const handleDelete = (f) => {
		friendSelected.current = { ...f };
		toggleOpen();
	};

	const handleSort = () => {
		isSorting.current = true;
		dispatch({
			type: "SORT_FRIEND",
			payload: "isFavourite",
		});
		setTimeout(() => {
			isSorting.current = false;
		}, 3000);
	};

	const confirmDelete = (e) => {
		dispatch({
			type: "DELETE_FRIEND",
			payload: { ...friendSelected.current },
		});
		friendSelected.current = {};
		setIsOpen(!isOpen);
		if (paginatedData.length - 1 === 0) {
			goToPrevPage(e);
		}
		inputText.current.value = "";
	};

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Pills onClick={handleSort}>Favourites</Pills>
			<Input
				type='text'
				placeholder="Enter your friend's name"
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						addFriend(event);
					} else {
						handleSearch();
					}
				}}
				onKeyPress={handleSearch}
				onKeyUp={handleSearch}
				ref={inputText}
			/>
			{paginatedData.length > 0 &&
				paginatedData.map((f) => (
					<div className='card-item' key={f.id}>
						<div className='card-item-data'>
							<div className='card-text'>{f.name}</div>
							<div className='card-subtext'>is your friend</div>
						</div>
						<div>
							<ButtonNoBorder
								onClick={(e) => {
									e.preventDefault();
									handleDelete(f);
								}}>
								<Trash size='20' />
							</ButtonNoBorder>
							<ButtonNoBorder
								color=' #ffd700'
								onClick={(e) => {
									e.preventDefault();
									handleFavourite(f);
								}}>
								{f.isFavourite ? <StarFill size='20' /> : <Star size='20' />}
							</ButtonNoBorder>
						</div>
						<Modal open={isOpen} onClose={toggleOpen}>
							<h1>
								Are you sure you want to delete {friendSelected.current.name}?
							</h1>
							<div>
								<Button
									onClick={toggleOpen}
									background='#e62c1e'
									color='#ffffff'>
									Cancel
								</Button>
								<Button
									background='#8bc34a'
									color='#ffffff'
									onClick={(e) => {
										confirmDelete(e);
									}}>
									Yes
								</Button>
							</div>
						</Modal>
					</div>
				))}
			{paginatedData.length > 0 && (
				<div style={{ textAlign: "center" }}>
					<Button
						onClick={goToPrevPage}
						disabled={currentPage === 1}
						color='black'>
						<ArrowLeftCircle size='30' />
					</Button>
					<Button
						onClick={goToNextPage}
						disabled={currentPage === pages}
						color='black'>
						<ArrowRightCircle size='30' />
					</Button>
				</div>
			)}
			{!showMessage.current && (
				<p style={{ fontSize: "1rem", fontWeight: "bold" }}>
					You have no friends with this name. Click Enter to Add !
				</p>
			)}
		</>
	);
};

export default CardContent;
