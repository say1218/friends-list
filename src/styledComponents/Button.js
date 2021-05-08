import styled from "styled-components";

const Button = styled.button`
	display: inline-block;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	display: block;
	&[disabled] {
		opacity: 0.5;
	}
`;

const DeleteButton = styled(Button)`
	color: red;
`;

const FavouriteButton = styled(Button)`
	color: red;
`;

export { Button, DeleteButton, FavouriteButton };
