import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
	color: props.color || "black",
}))`
	display: inline-block;
	font-size: 1em;
	margin: 0.25rem;
	padding: 0.25em 1em;
	border: 2px solid ${(props) => props.color};
	border-radius: 3px;
	cursor: pointer;
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
