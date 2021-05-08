import styled from "styled-components";

const Card = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;

	.card-container {
		display: grid;
		row-gap: 1rem;
		padding: 2rem;
		box-shadow: 4px 4px 16px #e1e1e1;

		.card-item {
			display: flex;
			width: 360px;
			justify-content: space-between;
			padding: 0.75rem 1.25rem 0.75rem 0.75rem;
			box-shadow: 4px 4px 16px #e1e1e1, -2px -2px 16px #fff;

			.card-item-data {
				display: flex;
				align-items: flex-start;
				flex-direction: column;
				justify-content: center;
				color: #272a3a;
				.card-text {
					font-size: 1rem;
					font-weight: 500;
				}
				.card-subtext {
					font-size: 0.817rem;
				}
			}
		}
	}
`;

export default Card;
