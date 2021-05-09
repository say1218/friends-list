import styled from "styled-components";

const Modal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: fixed;
	background-color: #fefefe;
	box-shadow: 4px 4px 16px #e1e1e1;
	width: 20rem;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 0.3rem;
	padding: 2rem;

	h1 {
		font-size: 150%;
		margin: 0 0 15px;
	}

	.close {
		color: #aaa;
		line-height: 50px;
		font-size: 80%;
		position: absolute;
		right: 0;
		top: 0;
		width: 70px;
		text-decoration: none;
	}
`;

const Overlay = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #202020;
	opacity: 0.9;
	overflow: hidden;
`;

export { Modal, Overlay };
