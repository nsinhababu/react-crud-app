import ReactDOM from 'react-dom';
import './styles.css';
const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-wrapper'>{children}</div>,

    document.getElementById('modal-portal')
  );
};

export default Modal;
