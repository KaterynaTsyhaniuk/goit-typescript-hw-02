import Modal from "react-modal";
import { ImageModalProps } from "../App/App.types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  alt,
  src,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={src} alt={alt} />
      </Modal>
    </div>
  );
};

export default ImageModal;
