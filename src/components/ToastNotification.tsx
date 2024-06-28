import { Toast, ToastContainer } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface ToastNotificationProps {
  message: string;
  delay?: number;
  show: boolean;
  onClose: () => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  delay = 3000,
  show,
  onClose,
}) => {
  return (
    <ToastContainer className="p-3 toastNotification">
      <Toast show={show} onClose={onClose} delay={delay} autohide>
        <Toast.Header className="text-muted fw-bold mx-5">
          {message}
        </Toast.Header>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
