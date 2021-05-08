import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
	type: props.type || "text",
	size: props.size || "1rem",
	placeholder: props.placeholder || "",
}))`
	font-size: ${(props) => props.size};
	border: 2px solid gray;
	border-radius: 3px;
	padding: ${(props) => props.size};
`;

export default Input;
