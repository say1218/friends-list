import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
	color: props.color || "black",
	background: props.background || "white",
}))`
	display: inline-block;
	font-size: 1em;
	font-weight: bold;
	margin: 0.25rem;
	padding: 0.25em 1em;
	border: 2px solid ${(props) => props.background};
	border-radius: 3px;
	cursor: pointer;
	background: ${(props) => props.background};
	color: ${(props) => props.color};
	&[disabled] {
		opacity: 0.5;
	}
`;

const ButtonNoBorder = styled(Button)`
	border: 0;
	background: none;
	padding: 0;
`;

export { Button, ButtonNoBorder };
