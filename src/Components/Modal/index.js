import ReactDOM from 'react-dom';
import './styles.css';
const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-wrapper'>
      <div className='inner-wrapper'>{children}</div>
    </div>,

    document.getElementById('modal-portal')
  );
};

export default Modal;
