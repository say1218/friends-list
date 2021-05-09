import ReactDOM from "react-dom";
import { Modal, Overlay } from "./../styledComponents/Modal";
import { ButtonNoBorder } from "./../styledComponents/Button";
import { XCircle } from "@styled-icons/bootstrap";

const ModalComponent = ({ open, children, onClose }) => {
	if (!open) return null;
	return ReactDOM.createPortal(
		<>
			<Overlay>
				<Modal>
					<div style={{ float: "right" }}>
						<ButtonNoBorder onClick={onClose} className='close'>
							<XCircle size='20' />
						</ButtonNoBorder>
					</div>
					<div>{children}</div>
				</Modal>
			</Overlay>
		</>,
		document.getElementById("portal")
	);
};

export default ModalComponent;
