import styled from "styled-components";

const Button = styled.button`
	display: inline-block;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	&[disabled] {
		opacity: 0.5;
	}
`;

const DeleteButton = styled(Button)`
	border: 0;
	background: none;
	padding: 0;
`;

const FavouriteButton = styled(Button)`
	color: #ffd700;
	border: 0;
	background: none;
	padding: 0;
`;

export { Button, DeleteButton, FavouriteButton };
