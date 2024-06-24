import { Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ToastNotificationProps {
  message: string;
  delay?: number;
  show: boolean;
  onClose: () => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ message,  delay = 3000, show, onClose }) => {
  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast show={show} onClose={onClose} delay={delay} autohide>
        <Toast.Header>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
