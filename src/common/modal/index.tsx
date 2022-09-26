import styles from "./Modal.module.css";
import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    open: boolean,
    children: ReactNode,
}

const Modal = ({ open, children }: ModalProps) =>
    open ? ReactDOM.createPortal(< div className={styles.modal} >
        <div className={styles.modal__content} >
            {children}
        </div>
    </div>, document.body) : null

export default Modal;